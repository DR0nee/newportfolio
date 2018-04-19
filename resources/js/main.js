$(document).ready(function(){


$('.top').fadeIn(1000);
$('.middle').fadeIn(2000);
$('.bottom').fadeIn(2000);




  var lastScrollTop = 0;
    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
      if (scrollTop - lastScrollTop > 50){
        var navHeight = $(".navbar").css("height");
        $(".navbar").animate({top: "-" + navHeight}, 150);
        lastScrollTop = scrollTop;
      } else if (lastScrollTop - scrollTop > 50) {
        $(".navbar").animate({top: "0px"}, 150);
        lastScrollTop = scrollTop;
      }
  });
});
