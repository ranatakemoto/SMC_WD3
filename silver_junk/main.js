$(document).ready(function () {


    $('#myCarousel').on('slide.bs.carousel', function (e) {
        console.log(e);
    });


    $('.js-modal-close').click(function () {
        // if($('#form').is(':valid')){}
        $('#myModal').modal('hide');
        $('.alert').addClass('show');
        $('.alert').alert();
    });
});

$(window).on('load', function () {
    $('#myCarousel').carousel({
        interval: 2000
    });

    $('#myModal').modal({
        // backdrop : 'static'
        backdrop: false
    });
});

$('input').blur(function () {


    if ($(this).val() !== "") {
        var form = $(this).parents('form');
        console.log($("[type=submit]"));
        $("[type=submit]").removeClass('disabled').removeAttr('disabled').data('dismiss', 'modal');
    }
});

$('.modal form').submit(function (e) {
    e.preventDefault();

    if (true) {
        $('#myModal').modal('hide');
        $('.alert').addClass('show');
        $('.alert').alert();
    }
});