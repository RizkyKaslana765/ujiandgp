document.addEventListener('visibilitychange', function(){
        if (document.visibilityState == "visible") {
         console.log("tab is active")
      } 
        else {
         window.location.reload();
         var warn = document.getElementById("warning");
         warn.style.display="block";
  }
});
