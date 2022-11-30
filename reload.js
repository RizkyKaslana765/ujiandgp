
onInactive(300, function () {
    alert("Yah jawaban kamu akan hilang semua :0");
    window.location.reload();
});

function onInactive(seconds, cb) {
    var ms = seconds * 1000;
    var wait = setTimeout(cb, ms);

    $(window).bind('mousemove click mouseup mousedown keydown keypress keyup submit change mouseenter scroll resize dblclick', function(){
        clearTimeout(wait);
        wait = setTimeout(cb, ms);
    });
}
