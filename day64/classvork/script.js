const form = document.getElementById("form");

const account = [];

const LogIn = function(name, email, password, password2){
  this.name = name;
  this.email = email;
  this.password = password;
  this.repeat = password2;
}

form.addEventListener("submit", function(e){
  e.preventDefault();
  const userName = form.elements.userName.value;
  const userEmail = form.elements.email.value;
  const password = form.elements.password.value;
  const repeat = form.elements.password2.value;

  if(password != repeat){
    alert("inviled password");
  }else{
    acc = new LogIn(userName,userEmail,password,repeat);
    account.push(acc);
    console.log(account);
  }
})