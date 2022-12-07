var countdown = new Date("Dec 08, 2022 03:00:00").getTime();
var myfunc = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countdown - now;
        
    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
    // Result is output to the specific element
    document.getElementById("timer").innerHTML = "<h2 class='center'> Batas Waktu " + hours + " jam " + minutes + " menit " + seconds + " detik " + "</h2>";
    // document.getElementById("hours").innerHTML = hours + "h " 
    // document.getElementById("mins").innerHTML = minutes + "m " 
    // document.getElementById("secs").innerHTML = seconds + "s " 
        
    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        // document.getElementById("end").innerHTML = "TIME UP!!";
        document.getElementById("timer").innerHTML = "<h2 class = 'center'> Waktu Habis, terimakasih telah mengerjakan remedial PAS DGP </h2>";
        document.body.style.backgroundColor = "#B42B3D";
        document.getElementById("topbar").style.backgroundColor = "#830717";
        document.getElementById("pageOne").style.display = "none";
        document.getElementById("soalPink").style.display = "none";
        document.getElementById("soalGreen").style.display = "none";
        setTimeout(() => {
            window.location.href = "https://www.youtube.com/shorts/gKl-mpszX5Y";
         }, 2000);
    }
    }, 1000);
