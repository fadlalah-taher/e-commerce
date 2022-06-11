const axios = require('axios').default;
window.addEventListener('DOMContentLoaded', () => {
    // DOM
    var passwordLoginIcon = document.getElementById("password-icon");
    var loginInputPassword = document.getElementById("login-inputPassword");
    var loginBtn = document.getElementById("loginBtn");
    var emailInput = document.getElementById("emailInput");

    // hide/unhide password icons DOM
    var hide1 = document.getElementById("hide1");
    var hide2 = document.getElementById("hide2");


    loginBtn.addEventListener("click", function(){
        let data = new FormData();
        data.append('email', emailInput.value);
        data.append('password', loginInputPassword.value);
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/login',
            data: data,
        })
        .then(function (response) {
            console.log(response.data);
            console.log(response.data.access_token);
            console.log("successfull");
            //window.location = "file:///C:/Users/Fadel/e-commerce/e-commerce-backend/e-commerce-frontend/index.html";
          }
        ) 
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
      //replaceText(`${type}-version`, process.versions[type])
    }
  });