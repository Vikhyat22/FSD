function validate()
{
  let username = document.getElementById("un").value;
  let password = document.getElementById("ps").value;
  let p1 = document.getElementById("result").value;
  if(username =="admin")
  {
    if(password == "admin")
    {
      
    }
    else
    {
      alert("Invalid Password");
    }
  }
  else
  {
    alert("Invalid");
  }
}