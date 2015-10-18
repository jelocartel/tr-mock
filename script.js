var dev = 0;
var preloaderDelay = 1000;
var clickTimeout = 500;

var removePreloader = function() {
  setTimeout(function(){
    $('.proto-preloader').css('opacity', 0);
    $('.proto-preloader').one('transitionend', function(){
      $('.proto-preloader').css('display', 'none');
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

  $('#main-send').on('click', function(){
    $('#modal4').closeModal();

    setTimeout(function(){
      $('.proto-preloader').css('position', 'relative');
      $('.main-container').addClass('off-screen');
      $('.main-container').one('transitionend', function(){
        $('.proto-preloader').css('opacity', 1);
        $('.proto-preloader').css('display', 'block');
        $('#landing-card-h').html('Thanks!');
        $('#landing-card-action').html('<button class="btn waves-effect waves-light blue darken-4">Share on facebook<i class="material-icons right">send</i></button>');
        $('body').removeClass('active-main');
        $('body').addClass('active-landing');

        removePreloader();
      });


    }, 300);
  });

  $('#modal2 .collection-item').on('click', function(){
    $('#modal2').closeModal();
    $('#canvas').attr('src', 'img/2.png');
    $('#open-modal').addClass('disabled');
    $('#send-button').removeClass('disabled');

  });
  if (dev) {
    $('.proto-preloader').css('display', 'none');
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
      $('.main-page').one('transitionend', function(){
        $('.main-page .card').css('height', '100vh');
      });
    }, clickTimeout);
  });

};

$(main);
