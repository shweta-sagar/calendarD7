//Adding js file for event type
// $("#flip").click(function(){
//        $("#panel").slideToggle("slow");
//    });

// $(document).ready(function(){
//   $('#block-menu-menu-subscribtion li').mouseenter(function(){
//      $(this).css('background','#FFF').css('color','#000');
//   });
//   $('#block-menu-menu-subscribtion li').mouseleave(function(){
//      $(this).css({'background':'#F75836'});
//   });
// });
$(document).ready(function(){
  $('.field-name-body .field-label').click(function(){
    $('.field-name-body p').slideToggle('slow');
  });
});
