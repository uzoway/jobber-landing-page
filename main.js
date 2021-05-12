// Mobile Navigation toggle

var menu = document.getElementById("mobileTog");
var mobilenav = document.getElementById("mobilenav");

mobilenav.style.display = "none";

menu.onclick = function(){
    if(mobilenav.style.display == "none"){
        mobilenav.style.display = "block";
        menu.src = "images/icon-close.svg";
    }
    else{
        mobilenav.style.display = "none";
        menu.src = "images/icon-hamburger.svg";
    }
}



