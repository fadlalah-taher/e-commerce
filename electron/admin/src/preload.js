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
    if(emailInput.value == "" || loginInputPassword.value == ""){
      alert("Fill all Fields");
    }
    else{
      let data = new FormData();
      data.append('email', emailInput.value);
      data.append('password', loginInputPassword.value);
      axios({
          method: 'post',
          url: 'http://127.0.0.1:8000/api/v1/user/login',
          //headers: {Authorization: `Bearer ${token}`},
          data: data,
      })
      .then(function (response) {
        var token = response.data["access_token"];
          axios({
          method: 'post',
          url: 'http://127.0.0.1:8000/api/v1/user/profile',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept':'application/json'
          },
        }).then(function(response){
          user_type = response.data["type"]
          console.log(user_type);
          if(user_type){
            localStorage.setItem('token', token)
            console.log("true");
            // window.location = "addItem.html";
            location.href = "addItem.html";

          }
          else{
            alert("You are not admin !")
            location.reload();
          }
        })

          
          // console.log(response.data.access_token);
          // console.log("successfull");
          //window.location = "addItem.html";
        }
      ) 
    }
    });

    //   // DOM AddItem
    //   var addItemForm = document.getElementById("createItem");
    //   var addBtn = document.getElementById("addBtn");
    // // Add Item

    // addBtn.addEventListener("click", function(){

    //     let data = new FormData(addItemForm);
    //     axios({
    //         method: 'post',
    //         url: 'http://127.0.0.1:8000/api/additem',
    //         data: data,
    //     })
    //     .then(function (response) {
    //       if(response.data == "mess around"){
    //         createdAccount.style.display = "block";
    //       }
    //       else{
    //         console.log(response);
    //         console.log(response.data);
    //         //window.location = "file:///C:/Users/Fadel/e-commerce/e-commerce-backend/e-commerce-frontend/login.html#";
    //       }
    //     }
    //     )
    //   });



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