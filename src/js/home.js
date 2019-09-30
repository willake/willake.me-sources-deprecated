import "../scss/home/home.scss";
import common from "./common";

function ToggleMenu(){
    $(".nav__mobile__button").toggleClass("is-active");
    $(".nav__mobile__dropdown").toggleClass("is-active");
}

$(".nav__mobile__button").click(function(){
    common.ToggleMenu();
});

$(".nav__mobile__dropdown__item").click(function(){
    common.ToggleMenu();
});


