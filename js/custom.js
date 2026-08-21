(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active');
        $('body').toggleClass('dark-mode');
        
        var $iframe = $('iframe');
        var currentSrc = $iframe.attr('src');

        if (currentSrc) {
          var newSrc = '';
          if (currentSrc.indexOf('theme=dark') !== -1) {
            newSrc = currentSrc
              .replace(/[?&]theme=dark/, '')
              .replace(/&/, '&');
          } else {
            var separator = currentSrc.indexOf('?') !== -1 ? '&' : '?';
            newSrc = currentSrc + separator + 'theme=dark';
          }
          console.log(newSrc)
          $iframe.attr('src', newSrc);
        }
    })

    // HEADER
    $(".navbar").headroom();

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

})(jQuery);
