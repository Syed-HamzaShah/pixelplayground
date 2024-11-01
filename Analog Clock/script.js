let h = document.getElementById('hour');
let m = document.getElementById('min');
let s = document.getElementById('sec');

function displayTime(){
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    h.style.transform =  `rotate(${hRotation}deg)`;
    m.style.transform =  `rotate(${mRotation}deg)`;
    s.style.transform =  `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000); 