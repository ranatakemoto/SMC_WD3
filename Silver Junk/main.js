$(document).ready(function () {
   

    $('#myCarousel').on('slide.bs.carousel', function (e) {
        console.log(e);
    });


    $('.js-modal-close').click(function(){
        // if($('#form').is(':valid')){}
            // if(true){
                $('#myModal').modal('hide');
            // }
    });
});

$(window).on('load', function(){
    $('#myCarousel').carousel({
        interval: 2000
    });

    $('.alert').addClass('show');
            $('.alert').alert();

     $('#myModal').modal({
         // backdrop : 'static'
         backdrop : false,
         keyboard : false
     });
});