const form = document.getElementById('form')
const name = document.getElementById('name')
const email = document.getElementById('email')
const phno = document.getElementById('phno')

const qualification = document.getElementById('qualification')
const errorelement=document.getElementById('error')
form.addEventListener('submit', (e) => {
    

    let message=[]
    if(name.value ===''|| name.value==null)
    {

        message.push("name is required")
    }

    if(phno.value.length <=10)
    {
        message.push("phone number should be 10 numbers")
    }
    if(message.length > 0)
    {
        e.preventDefault()
        errorelement.innerText=message.join(', ')
    }


})

// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success');
// }

// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// };

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }


// const validateInputs = () => {
//     const nameValue = name.value.trim();
//     const emailValue = email.value.trim();
//     const phnoValue = phno.value.trim();
//     const qualificationValue = qualification.value.trim();

//     let maxlength=2;
//     var regex = /[^a-zA-Z]/gi;
//      if(nameValue === ''|| !nameValue==regex || !nameValue.length<maxlength) {
       
//         setError(name, 'name is required'); 
        

//      } 
//     //  else if(nameValue==regex && nameValue.length<maxlength)
//     //     {

//     //         setError(name,"enter only alphabets and length is 20");
//     //     }
    
//     //  else if(nameValue.length<maxlength){

//     //     setError(name,"please enter limited data(upto 20 characters)");
//     // }
    
//     else {
//         setSuccess(name);
//     }

//     if(emailValue === '') {
//         setError(email, 'Email is required');
//     } else if (!isValidEmail(emailValue)) {
//         setError(email, 'Provide a valid email address');
//     } else {
//         setSuccess(email);
//     }

//     if(phnoValue === '') {
//         setError(phno, 'phno is required');
//     } else if (phnoValue.length ===10) {
//         setError(phno, 'phno must be at least 8 character.')
//     } 
//     // else if(phnoValue !== Text)
//     // {
//     //     setError(phno,"enter numbers")
//     // }
//     else {
//         setSuccess(phno);
//     }

//     if(qualificationValue === '') {
//         setError(qualification, 'Please enter your qualification');
//     }// else if (qualificationValue !== Number) {
//     //     setError(qualification, "enter text");
//     // } 
//     else {
//         setSuccess(qualification);
//     }

// };
