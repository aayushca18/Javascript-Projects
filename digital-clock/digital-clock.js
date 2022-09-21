const hr = document.getElementById("hours");
const min = document.getElementById("minutes");
const sec = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let apm = "AM";

    if(h>12){
        h = h-12;
        apm = "PM";
    }

    h = h<10 ? "0"+h : h;
    m = m<10 ? "0"+m : m;
    s = s<10 ? "0"+s : s;

    hr.innerText = h;
    min.innerText = m;
    sec.innerText = s;
    ampm.innerText = apm;
    setTimeout(()=>{
        updateClock()}, 1000)
}
updateClock();