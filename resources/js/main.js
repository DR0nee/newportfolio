$(document).ready(function(){

$('.top').animate({left: 238},3000,"linear");
$('.middle').animate({right: 237},3000,"linear");
$('.bottom').animate({left: 237},3000,"linear");

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
