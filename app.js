var btn = document.getElementById("btn")
btn.addEventListener("mouseover", teste, false)
btn.addEventListener("mouseout", teste2, false)

function teste(){
    btn.innerHTML = "Yes, I love you!"
}

function teste2(){
    btn.innerHTML = "Do you love me?"
}