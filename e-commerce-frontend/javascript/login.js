// buttons
var signBtn = document.getElementById("signBtn");
var loginBtn = document.getElementById("loginBtn");
//var logoutBtn = document.getElementById("logoutBtn");

var invalidPE = document.getElementById("invalidEmail");
// hide password icons
var hide1 = document.getElementById("hide1");
var hide2 = document.getElementById("hide2");
var hide3 = document.getElementById("hide3");
var hide4 = document.getElementById("hide4");
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


loginBtn.addEventListener("click", function(){
    let data = new FormData();
    data.append('email', emailInput.value);
    data.append('password', loginInputPassword.value);
    axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/v1/user/login',
        data: data,
    })
    .then(function (response) {

        var token = response.data["access_token"];
        localStorage.setItem("access_token", token);
          axios({
          method: 'post',
          url: 'http://127.0.0.1:8000/api/v1/user/profile',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept':'application/json'
          },
        })
        .then(function(response){
          user_id = response.data["id"]
          console.log(user_id);
          if(user_id){
            localStorage.setItem('token', user_id)
            window.location = "file:///C:/Users/Fadel/e-commerce/e-commerce-backend/e-commerce-frontend/index.html";
          }
          else{
            invalidEmail.style.display="block";
          }
        })
      // console.log(response.data);
      // console.log(response.data.access_token);
      //window.localStorage.setItem("user_id", response.data.id);
      //window.location = "file:///C:/Users/Fadel/e-commerce/e-commerce-backend/e-commerce-frontend/index.html";
    }
    ) 
  })



/* register */
var createBtn = document.getElementById("createBtn");
var registerForm = document.getElementById("createAcount");


createBtn.addEventListener("click", function(){

  let data = new FormData(registerForm);
  axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/v1/user/register',
      data: data,
  })
  .then(function (response) {
    if(response.data == "mess around"){
      createdAccount.style.display = "block";
    }
    else{
      console.log(response);
      window.location = "file:///C:/Users/Fadel/e-commerce/e-commerce-backend/e-commerce-frontend/login.html#";
    }
  }
  )
});


// Adding Register Form

signBtn.addEventListener("click", function(){
    popup.style.display = "flex";
    console.log("Hello flex");
});

window.onclick = function(event) {
  console.log(event.target);
    if (event.target == registerSection) {
      popup.style.display = "none";
    }
}


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