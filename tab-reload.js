document.addEventListener('visibilitychange', function(){
    if (document.visibilityState == "visible") {
     console.log("tab is active")
  } 
    else {
    // window.location.reload();
    // $("#soalContainer").load(" #soalContainer > *");
    document.getElementById('soalGreen1').src += '' ;
    document.getElementById('soalPink1').src += ' ' ;
}
});