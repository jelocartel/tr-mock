var dev = true;

var removePreloader = function(){
  if (dev) {
    $('.proto-preloader').remove();
    return;
  }
  setTimeout(function(){
    $('.proto-preloader').css('opacity', 0);
    $('.proto-preloader').one('transitionend', function(){
      $('.proto-preloader').remove();
      console.log('removed');
    });
  }, 0);
};


var main = function(){
  removePreloader();
};

$(main);
