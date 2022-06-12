var myNav = document.getElementById("myNav");
var icon = document.getElementById("span-icon");
var itemContainer = document.getElementById("item-container");

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
        console.log("hi");
        console.log(response);
        let items = response.data['items'];
        console.log(items);
        itemContainer.innerHTML = ""; 
        items.forEach(item => {
            let userHtml = `
            <div class="column">
            <div class="card">
              <img src="assets/whiteshirt.jpeg" alt="" />
              <div class="card-caption">
                <h4><b>${item.name}</b></h4>
                <p>
                ${item.description}
                </p>
                <p>
                ${item.price}
                </p>
                <i class="fa-solid fa-heart"></i>
              </div>
            </div>
          </div>`;
          itemContainer.innerHTML +=userHtml;
        })
        console.log(response);
        }
    )
})