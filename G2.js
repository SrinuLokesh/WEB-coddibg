function a()
{
const name=document.getElementById("#name");
const namevalue=/^\d{2}$/;
if(!namevalue.test(name))
{
    alert("hi");
}
else
{
    return false;
}
}