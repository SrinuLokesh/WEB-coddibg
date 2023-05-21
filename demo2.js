
const name=document.getElementById("#name");
const dob=document.getElementById("#dob");
const address=document.getElementById("#add");

const email=document.getElementById("#email");
const phno=document.getElementById("#phno");

const year=document.getElementById("#yop");

form.addEventListener('submit', e => {
    e.preventDefault();

validateInputs();

    
});

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
    const namevalue= name.value.trim();
//for name
    if(namevalue === '') {
        setError(name, 'name is required');
    } else {
        setSuccess(name);
    }

    //for  dob
    const dobvalue= dob.value.trim();
    if(dobvalue==="")
    {
        setError(dob,"D.O.B is required")
    }
    else
    {
        setSuccess(dob);
    }

    //for address

    const addressvalue= address.value.trim();
    
    const regex = /^\d{2}$/; // Regular expression for 10-digit phone number
    
     if(!regex.test(addressvalue)) {
      setError(address,"enter 2 digit age")
    }
    else{
        setSuccess(address)
    }

    //for email

    const emailvalue= email.value.trim();

    if(emailvalue==="")
    {
        setError(email,"enter email")
    }
    else{
        setSuccess(email);
    }

    //for phone number


    const phvalue=phno.value.trim()
    const regex1 = /^\d{10}$/; // Regular expression for 10-digit phone number
  
  if (!regex1.test(phvalue)) 
  {
    setError(phno,"10 digit phone number");
  }
  else{
    setSuccess(phno);
  }
   
  //for yop

  const yopvalue=year.value.trim();
  
  const no=/^\d{4}$/;

  if(!no.test(yopvalue))
  {
    setError(year,"enter valid year 4 digit")
  }
  else
  {
    setSuccess(year)
  }

  

    

    
    
    





}