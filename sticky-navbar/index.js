const navbar = document.querySelector(".navbar");
const bottom = document.querySelector(".bottom-container");
window.addEventListener("scroll", () =>{
if(window.scrollY>bottom.offsetTop-navbar.offsetHeight-50){
    navbar.classList.add("active");
}else{
    navbar.classList.remove("active");
}
})