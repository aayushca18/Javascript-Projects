const btn = document.querySelector(".btn");
const popup = document.querySelector(".popup");
const container = document.querySelector(".container");
const close = document.querySelector(".close-icon");
btn.addEventListener("click", ()=>{
    container.classList.add("active");
    popup.classList.remove("active");
})

close.addEventListener("click", ()=>{
    container.classList.remove("active");
    popup.classList.add("active");
})