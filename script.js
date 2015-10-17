var removePreloader = function(){
  setTimeout(function(){
    $('.proto-preloader').css('opacity', 0);
    $('.proto-preloader').one('transitionend', function(){
      $('.proto-preloader').remove();
      console.log('removed');
    });
  }, 1000);
};


var main = function(){
  removePreloader();
};

$(main);
