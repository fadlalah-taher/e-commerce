const axios = require('axios').default;

window.addEventListener('DOMContentLoaded', () => {
    // DOM AddItem
    var addItemForm = document.getElementById("createItem");
    var addBtn = document.getElementById("addBtn");
    var nameInput = document.getElementById("nameInput");
    var descriptionInput = document.getElementById("descriptionInput");
    var priceInput = document.getElementById("priceInput");
    var imageInput = document.getElementById("imageInput");
    var catSelect = document.getElementById("cat-select");
    var logoutBtn = document.getElementById("logout");

    // Logout
    logoutBtn.addEventListener("click", function(){
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/v1/user/logout',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept':'application/json'
            },
          })
          location.reload()
    })

    // Add Item
    addBtn.addEventListener("click", async function(){
        if(nameInput.value == "" || descriptionInput.value == "" || priceInput.value == "" || imageInput.value == ""){
            alert("fill all");
        }
        else{
            var base64String = "";
            const selectedFile = imageInput.files[0];
            var reader = new FileReader();
        
            reader.onload = function(){
                base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
                imageBase64Stringsep = base64String;

                let data = new FormData();
                data.append('name', nameInput.value);
                data.append('description', descriptionInput.value);
                data.append('price', priceInput.value);
                data.append('image', base64String);//"data:image/png;base64," + 
                data.append('category_id', catSelect.value);
                //let data = new FormData(addItemForm);
                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/v1/item/additem',
                    data: data,
                })
                .then(function (response) {
                    if(response.data == "mess around"){
                    createdAccount.style.display = "block";
                    }
                    else{
                    console.log(response);
                    location.reload();
                    //window.location = "file:///C:/Users/Fadel/e-commerce/e-commerce-backend/e-commerce-frontend/login.html#";
                    }
                })
            }
            reader.readAsDataURL(selectedFile);
        }
       
    });

    for (const type of ['chrome', 'node', 'electron']) {
        //replaceText(`${type}-version`, process.versions[type])
    }
});