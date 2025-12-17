const hrs = document.getElementById("hours");
const mins = document.getElementById("minutes");
const secs = document.getElementById("seconds");
const mili = document.getElementById("mili");
function time() {
    let date = new Date();

    hh = date.getHours();
    mm = date.getMinutes();
    ss = date.getSeconds();
    ml = date.getMilliseconds();
    
    let hrotate = 30 * hh + 1 / 2 * mm;
    let mrotate = 6 * mm;
    let srotate = 6 * ss;
   

    hrs.style.transform = `rotate(${hrotate}deg)`;
    mins.style.transform = `rotate(${mrotate}deg)`;
    secs.style.transform = `rotate(${srotate}deg)`;
   
}

setInterval(time, 1000);