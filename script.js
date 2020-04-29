$("document").ready(function() {
    const dt = new Date();
    let hour = dt.getHours();
    let minute = checkTime(dt.getMinutes());
    let second = checkTime(dt.getSeconds());

    function checkTime(i) {
        if( i < 10 ) {
          i = "0" + i;
        }
        return i;
    }

    if ( hour > 12 ) {
        hour = hour - 12;
        if ( hour == 12 ) {
          hour = checkTime(hour);
        document.getElementById("tt").innerHTML = hour + ":" + minute + ":" + second +" AM";
        }
        else {
          hour = checkTime(hour);
          document.getElementById("tt").innerHTML = hour + ":" + minute + ":" + second +" PM";
        }
      }
        else {
        document.getElementById("tt").innerHTML = hour + ":" + minute + ":" + second +" AM";
        }
        const time = dt.setTimeout(1000)    
    
});