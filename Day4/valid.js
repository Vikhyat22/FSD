function validated()
{
  let username = document.getElementById("un").value;
  let password = document.getElementById("ps").value;
  if(username.length<10 || username.length == 0)
  {
    return false;
  }
  if(password.length<10 || password.length == 0)
  {
    return false;
  }
  return true;
}