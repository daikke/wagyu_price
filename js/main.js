$(function(){

  /** ページ最上部へスクロール */
  $('#scroll-button').click(function(){
    const position = $('html').offset().top;
    $('html').animate({scrollTop:position}, 'slow')
    return false;
  });

})