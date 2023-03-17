(function ($) {
    "use strict";


    var box = document.querySelector('.hamburger-lines');
    box.style = "background-color: #e8f62a";
    box.style.outline = "8px solid #e8f62a";

})(jQuery);



// start back-to-top	
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 100) { // Show backToTopButton
        if (!backToTopButton.classList.contains("btnEntrance")) {
            backToTopButton.classList.remove("btnExit");
            backToTopButton.classList.add("btnEntrance");
            backToTopButton.style.display = "block";
        }
    }
    else { // Hide backToTopButton
        if (backToTopButton.classList.contains("btnEntrance")) {
            backToTopButton.classList.remove("btnEntrance");
            backToTopButton.classList.add("btnExit");
            setTimeout(function () {
                backToTopButton.style.display = "none";
            }, 250);
        }
    }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

function smoothScrollBackToTop() {
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 200;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
    }
}

function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
};


(function () {
    var tl;

    tl = new TimelineLite();

    $(".info").hide();

    $(function () {
        return $(".image").click(function () {
            var still, text;
            still = $(this);
            still.addClass("full");
            $(".image").find("h1").css("opacity", "0");
            still.find(".info").show();
            $(".image").css("pointer-events", "none");
            text = still.find(".info").find("h3");
            still.find(".gradient").hide();
            $(".exit").css("display", "block");
            return $(".exit").click(function () {
                still.removeClass("full");
                still.find(".info").hide();
                still.find(".gradient").show();
                $(".image").find("h1").css("opacity", "1");
                $(".exit").css("display", "none");
                $(".image").css("pointer-events", "auto");
                return tl.time(0);
            });
        });
    });

}).call(this);

