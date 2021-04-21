$(function(){
  $(".fade-img img:not(:first-child)").hide();
  setInterval(function() {
    $(".fade-img img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo(".fade-img");
  },5000);
});








$(function(){
    $(window).scroll(function (){
        $('.left-to-right, .down-to-top').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 150){
                $(this).addClass('scrollin');
            }
        });
    });
});







(function($) {
  var $nav   = $('#navArea');
  var $btn   = $('.toggle_btn');
  var $mask  = $('#mask');
  var open   = 'open'; // class
  // menu open close
  $btn.on( 'click', function() {
    if ( ! $nav.hasClass( open ) ) {
      $nav.addClass( open );
    } else {
      $nav.removeClass( open );
    }
  });
  // mask close
  $mask.on('click', function() {
    $nav.removeClass( open );
  });
} )(jQuery);








$(function () {
  $(".image__sub__thumb").first().addClass("active"); // 1枚目の小画像をアクティブに変更
  $('.image__sub__thumb__photo').click(function () { // 小画像がクリックされたらイベント発火
    image_url = $(this).attr("src"); // クリックされた画像のPATHを取得
    $(".image__main__photo").attr("src", image_url).hide().fadeIn(); // メイン画像をクリックされた画像に変更
    $(".image__sub__thumb.active").removeClass("active"); // 1枚目の小画像のアクティブを無効化
    $(this).parent().addClass("active"); // クリックされた小画像をアクティブに変更
  });
});
