$(document).ready(function () {
  checkdate();
  clickday();

  // refres the day
  $('#ref').click(function () {
    if ($('.toast').hasClass('active')) {
      removeactive();
      checkdate();
    } else {
      removeactive();
      checkdate();
      displaytoast();
    }
  });

  // display side menu
  $('.leftmenu').click(function () {
    slidemenuin();
  });

  // hide side menu
  $('.blur').click(function () {
    slidemenuout();
  });

});
//functions here
function slidemenuin() {
  $('.blur').show();
  $('.sidenav').animate({
    left:'0px',
  },130);
}
function slidemenuout() {
  $('.blur').hide();
  $('.sidenav').animate({
    left:'-380px',
  },130);
}

function checkdate() {
  var newday = new Date();
  var day_today = newday.getDay();
  if (day_today == 1) {
    $('.mon').addClass('activeday')
  }
  else if(day_today == 2){
    $('.tue').addClass('activeday')
  }
  else if (day_today == 3) {
    $('.wed').addClass('activeday')
  }
  else if (day_today == 4) {
    $('.thu').addClass('activeday')
  }
  else if (day_today == 5) {
    $('.fri').addClass('activeday')
  }else{
    
  }
}
function clickday() {
  $('.mon').click(function () {
    removeactive();
    $('.mon').addClass('activeday');
  });

  $('.tue').click(function () {
    removeactive();
    $('.tue').addClass('activeday');
  });

  $('.wed').click(function () {
    removeactive();
    $('.wed').addClass('activeday');
  });

  $('.thu').click(function () {
    removeactive();
    $('.thu').addClass('activeday');
  });

  $('.fri').click(function () {
    removeactive();
    $('.fri').addClass('activeday');
  });
}

function removeactive() {
  $('*').removeClass('activeday');
}
function displaytoast() {
  $('.toast').fadeIn(function () {
    $('.toast').addClass('active');
    $('.toast').animate({bottom:'40px'},200,function () {
      $('.toast').fadeOut(function () {
        $('.toast').removeClass('active');
      });
    });
  });
}
