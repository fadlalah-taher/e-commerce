//DOM
var myNav = document.getElementById("myNav");
var icon = document.getElementById("span-icon");
var itemContainer = document.getElementById("item-container");
var logoutBtn = document.getElementById("logoutBtn");
var loginBtn = document.getElementById("loginBtn");

icon.addEventListener("click", function(){
    myNav.style.width = "100%";
});
myNav.addEventListener("click", function(){
    myNav.style.width = "0%";
});


window.onload = (function(){
    axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/v1/item/allitems',
    })
    .then(function (response) {
        let items = response.data['items'];
        console.log(items);
        itemContainer.innerHTML = ""; 
        items.forEach(item => {
            let userHtml = `
            <div class="column">
            <div class="card">
              <img src="${item.image}" alt="" />
              <div class="card-caption">
                <h4><b>${item.name}</b></h4>
                <p>
                ${item.description}
                </p>
                <p>
                ${item.price}
                </p>
                <a><i class="fa-solid fa-heart"></i></a>
              </div>
            </div>
          </div>`;
          itemContainer.innerHTML +=userHtml;
        })
        console.log(response);
        }
    )
})


 // Logout
 logoutBtn.addEventListener("click", function(){
    axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/v1/user/logout',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          'Accept':'application/json'
        },
      })
      .then(function(response){
        console.log("logout");
        localStorage.setItem('access_token',null);
        loginBtn.style.display = "block";
        logoutBtn.style.display = "none";
      }).catch(function(response){
        alert("You are not logged in!")
      })
})