$(document).ready(function() {
    //Prevent Page Reload on all # links
    $("a[href='#']").click(function(e) {
        e.preventDefault();
    });



    $(".trainer_card").on("mouseenter", function() {
        $(this).addClass("flip");
    })
    $(".trainer_card").on("mouseleave", function() {
        $(this).removeClass("flip");
    })

    $(".trainer_card").on("touchstart", function() {
        $(this).closest(".trainers").find(".trainer_card").removeClass("flip");
        $(this).toggleClass("flip");
    })



    //slider
    var window_width = $(window).width(),
        slider_item = $(".banner-section li").length;
    $(".banner-section li:first-child").addClass('active');
    $(".banner-section li").height(window_width * 0.236);
    $(".banner-section li").width(window_width);
    $(".banner-section ul").width(window_width * slider_item);

    //next click
    $(".next-btn").click(function() {
        if ($(".banner-section li.active").next().length) {
            $(".banner-section li.active").addClass('next').next().addClass('active');
            $(".banner-section li.next").removeClass('active next');
            var current_active = $(".banner-section li.active").index();
            $(".banner-section ul").css("transform", "translateX(" + -(current_active * window_width) + "px)");
        }
    })

    //prev click
    $(".prev-btn").click(function() {
        if ($(".banner-section li.active").prev().length) {

            $(".banner-section li.active").addClass('prev').prev().addClass('active');
            $(".banner-section li.prev").removeClass('active prev');
            var current_active = $(".banner-section li.active").index();
            $(".banner-section ul").css("transform", "translateX(" + -(current_active * window_width) + "px)");
        }
    })

    $(window).resize(function(event) {
        window_width = $(window).width(),
            slider_item = $(".banner-section li").length;
        $(".banner-section li:first-child").addClass('active');
        $(".banner-section li").height(window_width * 0.236);
        $(".banner-section li").width(window_width);
        $(".banner-section ul").width(window_width * slider_item);
        var current_active = $(".banner-section li.active").index();
        $(".banner-section ul").css("transform", "translateX(" + -(current_active * window_width) + "px)");

    });
    /*mobile menu*/
    $(".hamburger-menu").click(function() {
        $("html,body").toggleClass("open-menu");
    });

});
/* Window scroll */
$(window).scroll(function() {
    if ($(window).scrollTop() > 70) {
        $("body").addClass('small-header top-full');
    } else {
        $("body").removeClass('small-header');
    }
});