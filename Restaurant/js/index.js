/* Start scrollUp */
const goUp = document.getElementById("scrollUp");
window.onscroll = function (){scrollUp()};
function scrollUp(){
    if (document.body.scroll > 20 || document.documentElement.scrollTop > 20){
        goUp.style.display="block";
    }else{
        goUp.style.display="none";
    }
}
/* End scrollUp */




/* Start scrollUp */
window.addEventListener("scroll",function(){
    let nav = document.getElementById("Navbar");
    let header = document.getElementById("header");
    let windowsPosistion = window.scrollY > 10;
    nav.classList.toggle("nav-onscroll" , windowsPosistion);
    header.classList.toggle("header-onscroll" , windowsPosistion);
})
/* End scrollUp */



/* Start side navbaar */
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("mySidenav").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.display = "none";
}
/* End side navbaar */

