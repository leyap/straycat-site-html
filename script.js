/**
 * Created by lisper on 2017/7/18.
 */
var msg;
var nav;
var scrollTop = 0;
var title;
window.onload = function () {
    //            msg = document.getElementById("msg");
    nav = document.getElementsByClassName("nav-main")[0];
    title = document.getElementById("title");
}
document.addEventListener("scroll", function () {
    //            msg.textContent = ""+document.body.scrollHeight+","
    scrollTop = document.body.scrollTop; // 0~200
    var height = (200-scrollTop); // 200~0
    nav.style.minHeight = height+"px";
    title.style.fontSize = (200-scrollTop)/4+"px";
});