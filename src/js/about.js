import "../scss/about/about.scss";
import common from "./common";

$(".nav__mobile__button").click(function(){
    common.ToggleMenu();
});

$(".nav__mobile__dropdown__item").click(function(){
    common.ToggleMenu();
});