const axios = require('axios').default;

window.addEventListener('DOMContentLoaded', () => {
    // DOM AddItem
    var addItemForm = document.getElementById("createItem");
    var addBtn = document.getElementById("addBtn");
    
    // Add Item

    addBtn.addEventListener("click", function(){

        let data = new FormData(addItemForm);
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
            console.log(response.data);
            //window.location = "file:///C:/Users/Fadel/e-commerce/e-commerce-backend/e-commerce-frontend/login.html#";
            }
        }
        )
    });

    for (const type of ['chrome', 'node', 'electron']) {
        //replaceText(`${type}-version`, process.versions[type])
    }
});