var subButton = document.getElementById("submit");
var work = document.getElementById("input--text");
var list = document.querySelector(".list");
subButton.addEventListener("click", ()=>{
    const newItem = document.createElement("li");
    newItem.innerHTML = work.value + '<i class="fa-solid fa-xmark fa-2x remove"></i>';
    list.appendChild(newItem);
    work.value = "";
    


if (list !== null) {
    var icon = document.querySelectorAll(".remove");
    console.log(icon);
   for (let i = 0; i < icon.length; i++) {
    icon[i].onclick = removeListItem;
   }
}
});

function removeListItem(eventObj) {
    console.log(eventObj.target);
    list.removeChild(eventObj.target.parentElement);

}