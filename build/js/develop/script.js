
/* search prety */

    function searchPrety(){

        $(document).on('click',function(e){
            var clicked = e.target;
            if(($(clicked).is('.search-button') || $(clicked).parents('.search-button').length) || ($(clicked).is('.search-form') || $(clicked).parents('.search-form').length)){
                if(!$('.search').is('.active')){
                    $('.search').addClass('active');
                    $('.search input').focus();
                }
            }else{
                $('.search').removeClass('active');
            }
        });

    };

/* /search prety */

/* scroll for header */

    function scrollForHeader(){

        $(window).scroll(function(){

            var scrolled = $(window).scrollTop();

            if(scrolled > 30){
                $('.header').addClass('active');
            }else{
                $('.header').removeClass('active');
            }

        });

    };

/* /scroll for header */

/* header sendwich */

    function headerSendwich(){

        $(document).on('click', function(e){

            if($(window).width() < 768){

                var clicked = e.target;

                if($(clicked).is('.sendwich:not(.active)') || $(clicked).parents('.sendwich:not(.active)').length){

                    $('.sendwich').addClass('active');
                    $('.nav-wrap').stop().slideDown(300, function(){
                        $('.nav-wrap').css({'height':'auto'});
                    });

                }else if((!$(clicked).is('.nav-wrap') && !$(clicked).parents('.nav-wrap').length) || $(clicked).is('.sendwich.active') || $(clicked).parents('.sendwich.active').length){

                    $('.sendwich').removeClass('active');
                    $('.nav-wrap').stop().slideUp(300);

                }

            }

        });

        $(window).resize(function(){

            if($(window).width() > 767){
                $('.sendwich').removeClass('active');
                $('.nav-wrap').removeAttr('style');
            }

        });

    };

/* /header sendwich */

/* orange-line triangle */

    function orangeLineTriangle(){

        function orangeLineTriangleSize(){

            var triangleBottom = $('.orange-line-container').height() / 2;
            var triangleRight = ($('.mbox').outerWidth() + 20) / 2;

            $('.orange-line-container .second-line').css({'border-width':triangleBottom+'px '+triangleRight+'px'});
            $('.gray-line-container .first-line').css({'border-width':triangleBottom+'px '+triangleRight+'px'})

        };

        orangeLineTriangleSize();

        $(window).resize(function(){

            orangeLineTriangleSize();

        });

    }

/* /orange-line triangle */


$(document).ready(function(){
    searchPrety();
    scrollForHeader();
    headerSendwich();
    AOS.init();

    $('.up-scroll').click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, 600);
      return false;
    });
});

$(window).load(function(){
    orangeLineTriangle();
});

$(window).resize(function(){

});