$(document).ready(function() {
    var numberChecked = 0;
    function checkboxShow() {
        $(this).siblings().toggleClass("checked");
        if ( $(this).siblings().hasClass("checked") ) {
            numberChecked++;
        } else {
            numberChecked--; 
        }
        if ( numberChecked === 4 ) {
            $(".checkbox-js").off();
            $(".surprise-popup").toggleClass("active").toggleClass("inactive");
            $(".close-on-click").removeClass("hidden");
            numberChecked = 0;
        }
        console.log(numberChecked);

    }
    function checkboxHide() {
        $(".surprise-popup").toggleClass("active").toggleClass("inactive");
        $(".close-on-click").addClass("hidden");
        $(".checkbox-js").on("click", checkboxShow);
        $(".checkbox-label .checked").removeClass("checked");
    }

    $(".checkbox-js").on("click", checkboxShow);
    $(".close-on-click-js").on("click", checkboxHide);

    $("#menu-icon").on("click", function() {
        $(".circle-menu").toggleClass("show");
    });
});
