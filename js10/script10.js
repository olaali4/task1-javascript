
var allProducts = document.querySelectorAll(".list li")
var content = document.querySelector("#content")
var btn = document.querySelector("#btn1")
var totalPrice = 0

allProducts.forEach(function  (item){
    item.onclick = function (){
        totalPrice +=  +(item.getAttribute("Price"))
        content.innerHTML += item.textContent + "/"
        if (content.innerHTML != "" ){
            btn.style.display = "block"
            btn.style.color = "000"
            btn.style.backgroundColor ="rgb(245, 242, 74)"
            btn.style.width = "250px"
            btn.style.height = "30px"
            btn.style.border = "8px"


        }
    }
} )

btn.onclick = function (){
div1.innerHTML = (totalPrice)
}
















