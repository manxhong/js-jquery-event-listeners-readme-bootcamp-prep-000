// //define functions here
var getIt = function(){
  alert('hey');
}

var frameIt = function(){
  $('img').addClass('tasty');
}

var submitIt = function(){
  alert('Your form is going to be submitted now.');
}



$(document).ready(function(){

// call functions here
  $('p').click(getIt);
  $('img').on('load', frameIt);
});
