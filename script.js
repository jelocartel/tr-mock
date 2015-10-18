var dev = 1;
var preloaderDelay = 1000;
var clickTimeout = 500;

var removePreloader = function() {
  setTimeout(function(){
    $('.proto-preloader').css('opacity', 0);
    $('.proto-preloader').one('transitionend', function(){
      $('.proto-preloader').remove();
      $('.main-container').removeClass('off-screen');
    });
  }, preloaderDelay);
};


var main = function(){
  $('.modal-trigger').leanModal();
  $('#modal1 .collection-item').on('click', function(){
    $('#modal1').closeModal();
    setTimeout(function(){
      $('#modal2').openModal();
    }, 300);
  });

  if (dev) {
    $('.proto-preloader').remove();
    $('.main-container').removeClass('off-screen');
    $('body').removeClass('active-landing');
    $('body').addClass('active-main');
    return;
  }

  removePreloader();

  $('#go-button').on('click', function(){
    setTimeout(function(){
      $('body').removeClass('active-landing');
      $('body').addClass('active-main');
    }, clickTimeout);
  });

};

$(main);
