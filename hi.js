const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', event => {
    

    validateInputs();
    //alert("submited successful");
    if(isFormValid()==true){
        alert("submited successful");
        form.submit();

     }else {
       
         event.preventDefault();
     }

});
function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-control');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    //username
    const namevalue=/^[A-Za-z. ]/;
    if(usernameValue =="") {
        setError(username, 'Username is required');
    }
    else if(!namevalue.test(usernameValue))
    {
        setError(username,"only letters are allowed ");
    }
    else if(usernameValue.length>20)
    {
        setError(username,"username should be upto 20 letters")
    }
    // else if(usernameValue.charAt(0)==" ")
    // {
    //     setError(username,"space is not aloowed first");
    // }

    else if(usernameValue.length<3)
    {
        setError(username,"username is more than 3 characters")
    }

    else {
        setSuccess(username);
    }

    //email
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } 
    else if(emailValue.length>20)
    {
        setError(email,"email should be upto 20 letters");
    }
    // else if(emailValue.charAt(0)==" ")
    // {
    //     setError(email,"space is not allowed first")
    // }
    else {
        setSuccess(email);
    }
//password1
    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ||passwordValue.length>15) {
        setError(password, 'Password must be inbetween 8 to 15 charecters')
    } 
    // else if(passwordValue.charAt(0)==" ")
    // {
    //     setError(password,"space is not allowed first");
    // }
    else {
        setSuccess(password);
    }

    //password2
    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } 
    else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};
