var mq = window.matchMedia("(min-width: 1024px)");
if (mq.matches) {
    
var control1 = 0;
var control2 = 0;

$(document).ready(function(){

    $('.pub').hover(function(){
        $(this).attr('src', 'images/pub.gif');
    }, function(){
        $(this).attr('src', 'images/pubb.png');
    });

    $('#info').click(function() {
        $('#main').css('display','none');
        $('#mainn').css('display','flex');
    });

    $('#back').click(function() {
        $('#main').css('display','flex');
        $('#mainn').css('display','none');

        $('#langtwo').css('display','none');
        $('#bio_en').css('display','none');
        $('#bio_pt').css('display','none');

        $('#langone').css('display','none');
        $('#biop_en').css('display','none');
        $('#biop_pt').css('display','none');
    });

    $('#andqtt').click(function() {
        if(control1==0){
            $('#langtwo').css('display','none');
            $('#bio_en').css('display','none');
            $('#bio_pt').css('display','none');

            $('#langone').css('display','flex');
            $('#biop_en').css('display','flex');
            $('#en').css('text-decoration','underline');
            control1 = 1;
        }else{
            $('#langone').css('display','none');
            $('#biop_en').css('display','none');
            $('#biop_pt').css('display','none');
            $('#en').css('text-decoration','none');
            $('#pt').css('text-decoration','none');
            control1 = 0;
        }
    });

    $('#pt').click(function() {
        $('#biop_en').css('display','none');
        $('#biop_pt').css('display','flex');
        $('#en').css('text-decoration','none');
        $('#pt').css('text-decoration','underline');
    });

    $('#en').click(function() {
        $('#biop_pt').css('display','none');
        $('#biop_en').css('display','flex');
        $('#pt').css('text-decoration','none');
        $('#en').css('text-decoration','underline');
    });

    $('#hjp').click(function() {
        if(control2==0){
        $('#langone').css('display','none');
        $('#biop_en').css('display','none');
        $('#biop_pt').css('display','none');

        $('#langtwo').css('display','flex');
        $('#bio_en').css('display','flex');
        $('#enn').css('text-decoration','underline');
        control2 = 1;
    }else{
        $('#langtwo').css('display','none');
        $('#bio_en').css('display','none');
        $('#bio_pt').css('display','none');
        $('#enn').css('text-decoration','none');
        $('#ptt').css('text-decoration','none');
        control2 = 0;
    }

});

    $('#ptt').click(function() {
        $('#bio_en').css('display','none');
        $('#bio_pt').css('display','flex');
        $('#enn').css('text-decoration','none');
        $('#ptt').css('text-decoration','underline');
    });

    $('#enn').click(function() {
        $('#bio_pt').css('display','none');
        $('#bio_en').css('display','flex');
        $('#ptt').css('text-decoration','none');
        $('#enn').css('text-decoration','underline');
    });
})
    
}

else {
    $('.pub').hover(function(){
        $(this).attr('src', 'images/pubb.png');
    }, function(){
        $(this).attr('src', 'images/pubb.png');
    });
    
     $('#info').click(function() {
        $('#main').css('display','none');
        $('#mainn').css('display','flex');
    });

    $('#back').click(function() {
        $('#main').css('display','flex');
        $('#mainn').css('display','none');

        $('#langtwo').css('display','none');
        $('#bio_en').css('display','none');
        $('#bio_pt').css('display','none');

        $('#langone').css('display','none');
        $('#biop_en').css('display','none');
        $('#biop_pt').css('display','none');
    });

    $('#andqtt').click(function() {
        if(control1==0){
            $('#langtwo').css('display','none');
            $('#bio_en').css('display','none');
            $('#bio_pt').css('display','none');

            $('#langone').css('display','flex');
            $('#biop_en').css('display','flex');
            $('#en').css('text-decoration','underline');
            control1 = 1;
        }else{
            $('#langone').css('display','none');
            $('#biop_en').css('display','none');
            $('#biop_pt').css('display','none');
            $('#en').css('text-decoration','none');
            $('#pt').css('text-decoration','none');
            control1 = 0;
        }
    });

    $('#pt').click(function() {
        $('#biop_en').css('display','none');
        $('#biop_pt').css('display','flex');
        $('#en').css('text-decoration','none');
        $('#pt').css('text-decoration','underline');
    });

    $('#en').click(function() {
        $('#biop_pt').css('display','none');
        $('#biop_en').css('display','flex');
        $('#pt').css('text-decoration','none');
        $('#en').css('text-decoration','underline');
    });

    $('#hjp').click(function() {
        if(control2==0){
        $('#langone').css('display','none');
        $('#biop_en').css('display','none');
        $('#biop_pt').css('display','none');

        $('#langtwo').css('display','flex');
        $('#bio_en').css('display','flex');
        $('#enn').css('text-decoration','underline');
        control2 = 1;
    }else{
        $('#langtwo').css('display','none');
        $('#bio_en').css('display','none');
        $('#bio_pt').css('display','none');
        $('#enn').css('text-decoration','none');
        $('#ptt').css('text-decoration','none');
        control2 = 0;
    }

});

    $('#ptt').click(function() {
        $('#bio_en').css('display','none');
        $('#bio_pt').css('display','flex');
        $('#enn').css('text-decoration','none');
        $('#ptt').css('text-decoration','underline');
    });

    $('#enn').click(function() {
        $('#bio_pt').css('display','none');
        $('#bio_en').css('display','flex');
        $('#ptt').css('text-decoration','none');
        $('#enn').css('text-decoration','underline');
    });
}
