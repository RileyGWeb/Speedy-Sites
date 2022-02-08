$(document).ready(function() {
    var numberChecked = 0;
    function checkboxToggle() {
        $(this).siblings().toggleClass("checked");
        if ( $(this).siblings().hasClass("checked") ) {
            numberChecked++;
        } else {
            numberChecked--; 
        }
        if ( numberChecked === 4 ) {
            $(".checkbox-js").off();
            $(".surprise-popup").toggleClass("active").toggleClass("inactive");
        }
    }
    $(".checkbox-js").on("click", checkboxToggle);    

    $("#menu-icon").on("click", function() {
        // $("#mobile_nav").toggleClass("show");
        $(".circle-menu").toggleClass("show");
    });
});



// var numberChecked = 0;
// document.querySelectorAll('.checkbox-js').forEach(function(item) {
//     item.addEventListener('click', function(event) {
//         var a = event.currentTarget;
//         a.classList.toggle("checked");    
//         if ( a.classList.contains("checked") ) {
//             numberChecked++; 
//         } else {
//             numberChecked--; 
//         }
//         if ( numberChecked === 4 ) {
//             document.querySelectorAll('.checkbox-js').forEach(function(itemb) {
//                 console.log(itemb)
//                 itemb.removeEventListener();
//             });
//             // document.querySelector(".checkbox-js").removeEventListener();
//             document.querySelector(".surprise-popup").classList.remove("d-none");
//         }
//     });
// });