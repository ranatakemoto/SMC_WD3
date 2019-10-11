$(document).ready(function () {
   

    $('#myCarousel').on('slide.bs.carousel', function (e) {
        console.log(e);
    });


    $('.js-modal-close').click(function(){
        // if($('#form').is(':valid')){}
            // if(true){
                $('#myModal').modal('hide');
            // }
            $('.alert').addClass('show');
            $('.alert').alert();
    });
});

$(window).on('load', function(){
    $('#myCarousel').carousel({
        interval: 2000
    });

    $('#myModal').modal({
        // backdrop : 'static'
        backdrop : false,
        keyboard : false
    });
});