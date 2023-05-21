
 //email
 function emvalidate(){
 var mail=document.getElementById("email").value;
console.log("idj")
 var regx=(/^[A-Za-z\._\-0-9][@][A-Za-z][\.][a-z]{2,4}$/);

 if(!regx.value(mail))
 {
   alert("incorrect email");

     return false;
 }
 else{
   return true;
 }

 }



function valphone()
{

var data= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var iddata=document.getElementById("phno");
if(iddata=="")
{
   document.getElementById("phno").innerHTML="please fill";
   alert("enter phone number")
   return false;
   console.log("PLease fill the details");
}
else if(isNaN(iddata))
{
   document.getElementById("phno").innerHTML="empty please fill";
 alert("fill the number");
   console.log("PLease fill the details");
   return false;
}
else if(!iddata.match(data))
{
   document.getElementById("phno").innerHTML="number invalid";
   alert("enter valid umber");
   console.log("PLease fill the details");

   return false;
}
return true;
}

//for date
function validatedate()
{
var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
var date=document.getElementById("idate");
// Match the date format through regular expression
if(date.value.match(dateformat))
{
 return true;

}
else{
 alert("invalid date");
}
}
//for year of passout
function yop()
{
  var yop=document.getElementById("idyop");
  if(yop>=2000||yop<=2024)
  {
return true; 
  }
  else{
    alert("enter valid data");
  }
}

//for name

function name()
{
  var name=document.getElementById("idname");
  if(!name===Number)
  {
    return true;
  }
  else{
    alert("enter string type data");
  }
  name.focus();
  return false;
}

function  validateForm()
{
  name();


}





//waste
// <!-- <script type="text/javascript"  defer src="demo1.js"> -->
//   <!-- </script> -->
//   <!-- <script>
 
   
function age()
{
  const ageid= document.getElementById(" age");
  const agenumber =ageid;
  const regex = /^\d{2}$/; // Regular expression for 10-digit phone number
  
  if (!regex.test(agenumber)) {
    alert("Please enter a valid 2-digit age ");
    ageid.focus();
    return false;
  }
  
  return true;
}

function phnumber()
    {
  const phoneInput = document.getElementById("phone");
  const phoneNumber = phoneInput;
  const regex = /^\d{10}$/; // Regular expression for 10-digit phone number
  
  if (!regex.test(phoneNumber)) {
    alert("Please enter a valid 10-digit phone number");
    phoneInput.focus();
    return false;
  }
  
  return true;
}

function validateForm()
{
  age();
   phnumber();
   
}


   

