export default {
    ToggleMenu: function(){
        $(".nav__mobile__button").toggleClass("is-active");
        $(".nav__mobile__dropdown").toggleClass("is-active");
    },
    ScrollToSection: function(section, time) {
        $("html,body").animate(
            {
                scrollTop: $(section).offset().top - $(".nav").height()
            },
            time,
            "swing",
            function() {}
        );
        ToggleMenu();
    }
}