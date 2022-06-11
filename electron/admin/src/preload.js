
var passwordLoginIcon = document.getElementById("password-icon");
var loginInputPassword = document.getElementById("login-inputPassword");

// hide/unhide password icons DOM
var hide1 = document.getElementById("hide1");
var hide2 = document.getElementById("hide2");

// hide/unhide password login form
passwordLoginIcon.addEventListener("click", function(){
  if(loginInputPassword.type === 'password'){
      loginInputPassword.type = "text";
      hide1.style.display = "block";
      hide2.style.display = "none";
    }
    else{
      loginInputPassword.type = "password";
      hide1.style.display = "none";
      hide2.style.display = "block";

    }
});