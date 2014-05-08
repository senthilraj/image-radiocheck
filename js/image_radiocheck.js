/* 
 *Author: R G senthilkumar 
 *Website: www.senthildesigner.co.nr
 */
(function ( $ ) {

    $.fn.radio_check = function(options) {
        var settings = $.extend({
            checkbox        : true,
            radio           : true
        }, options);
       
        if(settings.checkbox==true)
            {
                $("input:checkbox").wrap("<div class='check'/>");
                $(".check").append("<div class='check-img'/>");
            }
            
       if(settings.radio==true)
            {
                $("input:radio").wrap("<div class='radio'/>");
                $(".radio").append("<div class='radio-img'/>");
            } 
        
        return this.each( function() {
            
            $('.radio .radio-img').click(function() {
                var pname = $(this).parent().siblings(".radio").children(".radio-img").removeAttr("style");
                $(this).css("background-position","18px -1px");
                $(this).prevAll('input').prop('checked',true);
            });

            $('.check .check-img').click(function() {   
                var rdcheck = $(this).prevAll('input').prop('checked');
                if(rdcheck==false)
                {
                    $(this).css("background-position","17px -1px");
                    $(this).prevAll('input').prop('checked',true);
                }
                else
                {
                    $(this).removeAttr("style");
                    $(this).prevAll('input').prop('checked',false);
                }
            });
        });
   };
 
}( jQuery ));