jQuery(document).ready(function($) {


JMULTISCROLL = {
	msfunc: function() {
		
            
     if ($(window).width() > 800) {

        var nav = false;
        if (multiscroll_settings.nav == '1') {
            nav = true;
        }

        if ($('.multi-scroll').length > 0) {
            
            $('.multi-scroll').multiscroll({

                verticalCentered: true,
                scrollingSpeed: 700,
                easing: 'easeInQuart',
                menu: false,
                sectionsColor: [],
                navigation: nav,
                navigationPosition: 'right',
                navigationColor: '#000',
                navigationTooltips: [],
                loopBottom: true,
                loopTop: true,
                css3: false,
                paddingTop: 0,
                paddingBottom: 0,
                normalScrollElements: '#disable-multiscroll,#disable-multiscroll2',
                keyboardScrolling: true,
                touchSensitivity: 5,

                // Custom selectors
                sectionSelector: '.scrollable',
                leftSelector: '.left-part',
                rightSelector: '.right-part',


                //events
                onLeave: function(index, nextIndex, direction) {

                if ($(window).width() > 800) {

                    $('.ms-table .wpb_animate_when_almost_visible').removeClass("wpb_start_animation");
                    $('.ms-table .wpb_animate_when_almost_visible').removeClass("animated");

                 }

                },
                afterLoad: function(anchorLink, index) {

                 if ($(window).width() > 800) {


                    $('.ms-table .wpb_animate_when_almost_visible').addClass("wpb_start_animation");
                    $('.ms-table .wpb_animate_when_almost_visible').addClass("animated");


                 }
                    
                },

                afterRender: function(anchorLink, index) {},

                afterResize: function() {
                    $.fn.multiscroll.destroy();
                    $('.multi-scroll').addClass("multi-scroll-resize");
                    $('#multiscroll-nav').hide();
                },


            });
            
            
            
            
            var autoPlay =  $('.multi-scroll').data('auto-play');
            var autoInterval =  $('.multi-scroll').data('auto-interval');
            
            
            
            
            function autosplit() {
                $.fn.multiscroll.moveSectionDown(); 
            }
            
            
            
            
            if (autoPlay) {
            
            setInterval(autosplit, autoInterval);
                
            }
            
            
            
            
            
            
            
        }

    }
                       

        
	}
}
//function call
JMULTISCROLL.msfunc();
    
    
    
 $( window ).resize(function() {
   JMULTISCROLL.msfunc();
});


});