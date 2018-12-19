$(function () {

    // Get saved data from sessionStorage
    var visited = sessionStorage.getItem('visited');


    //if we are on the landing page
    if ($("body").hasClass("index") == true) {
        //if we have not visited the landing page before, animate the splash page
        if (visited != "true") {
            //fadeIn(<MILLISECOND VALUE>).

            window.setTimeout(function () {
                $("#splash-one").fadeIn();
            }, 200);
            window.setTimeout(function () {
                $(".splash-text").fadeIn();
            }, 400);

            window.setTimeout(function () {
                $("#splash-two").fadeIn();
            }, 600);
            window.setTimeout(function () {
                $("#splash-three").fadeIn();
            }, 900);
            window.setTimeout(function () {
                $("#splash-four").fadeIn();
            }, 1200);
            window.setTimeout(function () {
                $("#splash").fadeOut();
                $("body").css("overflow", "auto");
            }, 3500);
        } else {
            //if we have visited the homepage already, hide the splash page and enable scrolling.
            $("#splash").hide();
            $("body").css("overflow", "auto");
        }

    }



    $(".open-hamburger").click(function () {

        $("#hamburger").fadeIn();
        $("body").css("overflow", "hidden");
    });

    $(".close-hamburger").click(function () {

        $("#hamburger").fadeOut();
        $("body").css("overflow", "auto");
    });

    // Save data to sessionStorage
    sessionStorage.setItem('visited', 'true');

}); //END
