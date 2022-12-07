function gachaSoal(){
    let gacha = Math.floor(Math.random() * (4 - 1)) + 1;
    console.log(gacha);
    if (gacha == 1){
        document.getElementById("gotSoalPink").innerHTML = " <div class='menu-pink round-corner margin-center'> <h3 class='center'> Kamu mendapatkan soal Pink!!  </h3> </div>"
        console.log("Soal Pink");
        setTimeout(function() { 
            console.log("wleee"); 
            document.body.style.backgroundColor = "#EFBAD8";
            document.getElementById("topbar").style.backgroundColor = "#BB5C94";
            document.getElementById("soalPink").style.display = "block";
            document.getElementById("pageOne").style.display = "none";
        },3000);
    } else if (gacha == 3 ){
        document.getElementById("gotSoalGreen").innerHTML = " <div class='menu-green round-corner margin-center'> <h3 class='center'> Kamu mendapatkan soal Hijau!!  </h3> </div>"
        console.log("Soal Green");
        setTimeout(function() { 
            console.log("wleee2"); 
            document.body.style.backgroundColor = "#BCD5B9";
            document.getElementById("topbar").style.backgroundColor = "#207315";
            document.getElementById("soalGreen").style.display = "block";
            document.getElementById("pageOne").style.display = "none";
        },3000);
    } else if (gacha == 2) {
        document.getElementById("gotSoalPink").innerHTML = " <div class='menu-red round-corner margin-center'> <h3 class='center'> Coba lagi , kurang beruntung :(  </h3> </div>";
        document.body.style.backgroundColor = "#B42B3D";
        document.getElementById("topbar").style.backgroundColor = "#830717";
        document.getElementById("pageOne").style.display = "none";
        setTimeout(() => {
                  window.location.reload();
        }, 2000);
    }

}
//<![CDATA[
     window.addEventListener('load', function() {
          var maybePreventPullToRefresh = false;
          var lastTouchY = 0;
          var touchstartHandler = function(e) {
            if (e.touches.length != 1) return;
            lastTouchY = e.touches[0].clientY;
            // Pull-to-refresh will only trigger if the scroll begins when the
            // document's Y offset is zero.
            maybePreventPullToRefresh =
                window.pageYOffset == 0;
          }

          var touchmoveHandler = function(e) {
            var touchY = e.touches[0].clientY;
            var touchYDelta = touchY - lastTouchY;
            lastTouchY = touchY;

            if (maybePreventPullToRefresh) {
              // To suppress pull-to-refresh it is sufficient to preventDefault the
              // first overscrolling touchmove.
              maybePreventPullToRefresh = false;
              if (touchYDelta > 0) {
                e.preventDefault();
                return;
              }
            }
          }

          document.addEventListener('touchstart', touchstartHandler, false);
          document.addEventListener('touchmove', touchmoveHandler, false);      });
            //]]>
