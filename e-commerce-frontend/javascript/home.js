var myNav = document.getElementById("myNav");
var icon = document.getElementById("span-icon");

icon.addEventListener("click", function(){
    myNav.style.width = "100%";
});
myNav.addEventListener("click", function(){
    myNav.style.width = "0%";
});