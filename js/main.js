

/*  Dropdown */

$(function () {
    $('.dropdown-toggle').dropdown();
});






/*   Big slider  */

$(function () {

    $('#fs-slider').imgslider();

});







/*  Images jq - on button - hover  */

$(document).ready(function () {
    $('.read1').mouseover(function () {
        $(".glyphicon-thumbs-up").toggleClass('mojaKlasa');
    })
        .mouseleave(function () {
            $(".glyphicon-thumbs-up").toggleClass('mojaKlasa');
        });
});

$(document).ready(function () {
    $('.read2').mouseover(function () {
        $(".glyphicon-heart").toggleClass('mojaKlasa');
    })
        .mouseleave(function () {
            $(".glyphicon-heart").toggleClass('mojaKlasa');
        });
});
$(document).ready(function () {
    $('.read3').mouseover(function () {
        $(".glyphicon-grain").toggleClass('mojaKlasa');
    })
        .mouseleave(function () {
            $(".glyphicon-grain").toggleClass('mojaKlasa');
        });
});
$(document).ready(function () {
    $('.read4').mouseover(function () {
        $(".glyphicon-star").toggleClass('mojaKlasa');
    })
        .mouseleave(function () {
            $(".glyphicon-star").toggleClass('mojaKlasa');
        });
});


$(document).ready(function () {
    $('#listslide1').mouseover(function () {
        $(".glyphicon-thumbs-up").toggleClass('mojaKlasa');
    })
        .mouseleave(function () {
            $(".glyphicon-thumbs-up").toggleClass('mojaKlasa');
        });
});

$(document).ready(function () {
    $('#listslide2').mouseover(function () {
        $(".glyphicon-heart").toggleClass('mojaKlasa');
    })
        .mouseleave(function () {
            $(".glyphicon-heart").toggleClass('mojaKlasa');
        });
});

$(document).ready(function () {
    $('#listslide3').mouseover(function () {
        $(".glyphicon-grain").toggleClass('mojaKlasa');
    })
        .mouseleave(function () {
            $(".glyphicon-grain").toggleClass('mojaKlasa');
        });
});

$(document).ready(function () {
    $('#listslide4').mouseover(function () {
        $(".glyphicon-star").toggleClass('mojaKlasa');
    })
        .mouseleave(function () {
            $(".glyphicon-star").toggleClass('mojaKlasa');
        });
});



/* Button scroll Top  */

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



//  Images //

/* Hover on images */

$(".hover").mouseleave(
    function () {
        $(this).removeClass("hover");
    }
);





