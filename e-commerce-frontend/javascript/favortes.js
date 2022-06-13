var myNav = document.getElementById("myNav");
var icon = document.getElementById("span-icon");
var favortesContainer = document.getElementById("favortes-container");

icon.addEventListener("click", function(){
    myNav.style.width = "100%";
});
myNav.addEventListener("click", function(){
    myNav.style.width = "0%";
});


window.onload = (function(){
    console.log("hi");
    axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/v1/item/allitems',
    })
    .then(function (response) {
        let items = response.data['items'];
        console.log(items);
        favortesContainer.innerHTML = ""; 
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
          favortesContainer.innerHTML +=userHtml;
        })
        console.log(response);
        }
    )
})

