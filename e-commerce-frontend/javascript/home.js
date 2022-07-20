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
    var fav_ids = [];
    axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/v1/item/allitems',
    })
    .then(function (response) {
        user_id = localStorage.getItem('token');
        let items = response.data['items'];
        itemContainer.innerHTML = ""; 
        var fav_pre = ``
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
                <button id="item_${item['id']}" class="fav-btn" ${fav_pre}><a><i class="fa-solid fa-heart"></i></a></button>
                
              </div>
            </div>
          </div>`;
          itemContainer.innerHTML +=userHtml;
        })
        var fav_btns = document.getElementsByClassName("fav-btn");
        for (const element of fav_btns) {
            let eid = element.id.split('_')[1]
            eid = parseInt(eid)

            // add event listener for each fav button
            element.addEventListener("click", async function () {
                let token = localStorage.getItem("access_token");
                let fav_data = new FormData()
                fav_data.append('user_id', user_id)
                fav_data.append('item_id', eid)
                // console.log(eid)
                if (fav_ids.includes(eid)) {

                    // removing from favs
                    await axios({
                        method: 'post',
                        url: 'http://127.0.0.1:8000/api/v1/favorite/removefavorite',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Accept': 'application/json'
                        },
                        data: fav_data
                    }).then(function (response) {
                        // remove the item from the favorited items list
                        if (response.data['success']) {
                            element.style.color = "black"
                            // console.log('removed')

                            fav_ids = fav_ids.filter(function (x) {
                                return x !== eid;
                            });
                            // console.log(fav_ids);
                        }
                    })

                } else {
                    
                    // set item as favorite
                    await axios({
                        method: 'post',
                        url: 'http://127.0.0.1:8000/api/v1/user/setfavorite',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Accept': 'application/json'
                        },
                        data: fav_data
                    }).then(function (response) {
                        // console.log(response);
                        // append the item to the favorited items list
                        // console.log("added");
                        if (response.data['success']) {
                            element.style.color = "red"
                            fav_ids.push(eid)
                            // console.log('pushed')

                        }

                    }).catch(function (err) {
                        // this happens when trying to favorite without being logged in
                        if (err.response['statusText'] == 'Unauthorized') {
                            alert("Login first")
                        }
                    })
                }
            })
        }
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