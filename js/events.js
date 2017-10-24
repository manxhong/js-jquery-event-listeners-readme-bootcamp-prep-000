// //define functions here
var getIt = function(){
  alert('hey');
}

var frameIt = function(){
  $('img').addClass('tasty');
}



$(document).ready(function(){

// call functions here
  $('p').click(getIt);
  $('img').on('load', frameIt);
});
