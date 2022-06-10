// buttons
var signBtn = document.getElementById("signBtn");
var loginBtn = document.getElementById("loginBtn");


// hide password icons
var hide1 = document.getElementById("hide1");
var hide2 = document.getElementById("hide2");
var hide1 = document.getElementById("hide3");
var hide2 = document.getElementById("hide4");
var passwordLoginIcon = document.getElementById("password-icon");
var passwordRegisterIcon = document.getElementById("passwordRegister-icon");
var loginInputPassword = document.getElementById("login-inputPassword");
var registerInputPassword = document.getElementById("inputPassword-register");
var popup = document.querySelector(".popup");


// email and register popup message
var emailInput = document.getElementById("emailInput");
var registerSection = document.getElementById("register-section");
var invalidEmail = document.getElementById("invalidEmail");
var createdAccount = document.getElementById("createdAccount");

/* register */
var createBtn = document.getElementById("createBtn");
var registerForm = document.getElementById("createAcount");


// hide password login form
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


  // hide password Register form
  passwordRegisterIcon.addEventListener("click", function(){
    if(registerInputPassword.type === 'password'){
        registerInputPassword.type = "text";
        hide3.style.display = "block";
        hide4.style.display = "none";
      }
      else{
        registerInputPassword.type = "password";
        hide3.style.display = "none";
        hide4.style.display = "block";
  
      }
  });