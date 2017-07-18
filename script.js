/**
 * Created by lisper on 2017/7/18.
 */
var msg;
var nav;
var scrollTop = 0;
window.onload = function () {
    //            msg = document.getElementById("msg");
    nav = document.getElementsByClassName("nav-main")[0];
}
document.addEventListener("scroll", function () {
    //            msg.textContent = ""+document.body.scrollHeight+","
    scrollTop = document.body.scrollTop;
    var height = (200-scrollTop/2)+"px";
    //                nav.style.minHeight = height;
    if (height < 40) {
        //                nav.style.minHeight = "40px";
    }
});