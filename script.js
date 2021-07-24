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

// slider

$('.slider').slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    slidesToShow:3,
    responsive:[
        {
            breakpoint: 1024,
            settings:{
                slidesToShow:3,
            }
        },
        {
            breakpoint: 768,
            settings:{
                slidesToShow:2,
            }
        },
        {
            breakpoint: 480,
            settings:{
                slidesToShow:1,
            }
        },
    ]
});

// クリックしたらハンバーガーメニュー閉じるページ内リンク//
$('#navArea a[href]').on('click', function(event) {
    $('.toggle_btn').trigger('click');
});


// =========================================================
 //      画面が開かれたときの初期設定  言語切り替え
 // =========================================================
window.onload = function() {

  // --- ブラウザのデフォルト言語を取得して初回の表示 -----
  var wDef = (navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2);
  langSet(wDef);

}
 // =========================================================
 //      選択された言語のみ表示
 // =========================================================
function langSet(argLang){

  // --- 切り替え対象のclass一覧を取得 ----------------------
  var elm = document.getElementsByClassName("langCng");

  for (var i = 0; i < elm.length; i++) {

    // --- 選択された言語と一致は表示、その他は非表示 -------
    if(elm[i].getAttribute("lang") == argLang){
      elm[i].style.display = '';
    }
    else{
      elm[i].style.display = 'none';
    }
  }
}
