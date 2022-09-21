const text = document.getElementById("textarea");
const total = document.getElementById("total");
const remaining = document.getElementById("remaining");
text.addEventListener("keyup",()=>{
    updateCounter()
})

function updateCounter(){
   total.innerHTML =  text.value.length;
   remaining.innerHTML = 100 - text.value.length;

}