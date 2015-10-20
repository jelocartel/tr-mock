var dev = 1;
var preloaderDelay = 1000;
var clickTimeout = 500;

$('body').removeClass('active-landing');
$('body').addClass('active-main');

var removePreloader = function() {
  if (dev) {
    $('.proto-preloader').remove();
    $('.main-container').removeClass('off-screen');
    return;
  }
  setTimeout(function(){
    $('.proto-preloader').css('opacity', 0);
    $('.proto-preloader').one('transitionend', function(){
      $('.proto-preloader').remove();
      $('.main-container').removeClass('off-screen');
    });
  }, preloaderDelay);
};


var main = function(){
  removePreloader();

  $('#go-button').on('click', function(){
    setTimeout(function(){
      $('body').removeClass('active-landing');
      $('body').addClass('active-main');
    }, clickTimeout);
  });

};

$(main);
