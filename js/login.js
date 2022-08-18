document.getElementById('btn-submit').addEventListener('click', function(){
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    const passField = document.getElementById('pass-field');
    const password = passField.value;
    console.log(email, password);

    if(email === 'boom@gmail.com' && password === 'boomboomaboomboom'){
        location.href = 'bank.html';
    }
    else{
        alert('invalid information');
    }

})