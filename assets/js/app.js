// Check off todos by clicking
$('ul').on('click', 'li', function(){
  $(this).toggleClass('completed');
});

//click on x to delete to-do
// e prevents bubbling
$('ul').on('click', 'span', function(e){
  $(this).parent().fadeOut(500, function(){ //this here is span
    $(this).remove(); // this here is the li
  });
  e.stopPropagation();
});


$("input[type='text']").keypress(function(e){
  if(e.which === 13){
    //grabbing new text from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $('ul').append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>")
  } else {

  }
});


// $('.fa-plus').click(function(){
//   $("input[type='text']").fadeToggle();
// });

$('h1').on('click', 'i', function(){
  if($('i').hasClass('fa-minus')){
    $(this).removeClass('fa-minus');
    $(this).addClass('fa-plus');
  } else if($('i').hasClass('fa-plus')){
    $(this).removeClass('fa-plus');
    $(this).addClass('fa-minus');
  }

  //$(this).toggleClass('fa-plus');
  $("input[type='text']").fadeToggle();
});
