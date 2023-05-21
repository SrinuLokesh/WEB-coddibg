const name=document.getElementById("#name")
const form=document.getElementById("#form")
const aerror=document.getElementById("error")
form.addEventListener('submit',(e) =>{
    let message=[]
    if(name.value===''||name==null)
    {
        message.push("name is required")
    }
    e.preventDefault()
    aerror.innerText = message.join(', ')
})