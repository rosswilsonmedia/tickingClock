function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() +
      new Date().getMinutes() * 60 +
      new Date().getHours() * 3600;
}

function setTime(){
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    var hours=(Math.floor(time/3600)%12)*30;
    document.getElementById('hour').style.transform="rotate("+hours+"deg)";
    var minutes=Math.floor((time%3600)/60)*6;
    document.getElementById('minutes').style.transform="rotate("+minutes+"deg)";
    var seconds=time%(3600*60)*6;
    document.getElementById('seconds').style.transform="rotate("+seconds+"deg)";
}
setTime();
setInterval(setTime, 1000);