let dollar = document.getElementById("dollar")
let pound = document.getElementById("pound")
let euro = document.getElementById("euro")

 dollar.onkeyup = function (){
     pound.value = dollar.value * 30 ;  
     pound.style.color = 'red'
}


 euro.onkeyup = function () {
    pound.value = euro.value * 32;
 } 


