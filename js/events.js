//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!")
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').append(' class="tasty"')
  })
}

function pressIt() {

}

function submitIt() {

}

$(document).ready(function(){

// call functions here

});
