var crsr = document.querySelector("#cursor")

document.addEventListener("mousemove", function(e) {
    crsr.style.left = e.x-10+"px"
    crsr.style.top =e.y-10+"px"


});