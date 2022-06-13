const axios = require('axios').default;
window.addEventListener('DOMContentLoaded', () => {

  // DOM
  var passwordLoginIcon = document.getElementById("password-icon");
  var loginInputPassword = document.getElementById("login-inputPassword");
  var loginBtn = document.getElementById("loginBtn");
  var emailInput = document.getElementById("emailInput");
  var invalidEmail = document.getElementById("invalidEmail");

  // hide/unhide password icons DOM
  var hide1 = document.getElementById("hide1");
  var hide2 = document.getElementById("hide2");


  loginBtn.addEventListener("click", function(){
    if(emailInput.value == "" || loginInputPassword.value == ""){
      invalidEmail.style.display = "block";
    }
    else{
      invalidEmail.style.display = "none";
      let data = new FormData();
      data.append('email', emailInput.value);
      data.append('password', loginInputPassword.value);
      axios({
          method: 'post',
          url: 'http://127.0.0.1:8000/api/v1/user/login',
          data: data,
      })
      .then(function (response) {
        var access_token = response.data["access_token"];
        var token = response.data["access_token"];
          axios({
          method: 'post',
          url: 'http://127.0.0.1:8000/api/v1/user/profile',
          headers: {
            'Authorization': `Bearer ${access_token}`,
            'Accept':'application/json'
          },
        }).then(function(response){
          user_type = response.data["type"]
          console.log(user_type);
          if(user_type){
            localStorage.setItem('token', access_token)
            location.href = "addItem.html";
          }
          else{
            alert("You are not admin !")
            location.reload();
          }
        })

        }
      ) 
    }
    });

    
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
    
    for (const type of ['chrome', 'node', 'electron']) {
    }
  });