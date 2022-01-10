// user interface
$(document).ready(function(){
  $("#img_1").click(function(){
    $("#img_1").toggle();
      $(".one").toggle();
       $(".one").click(function(){
        $(".one").hide();
        $("#img_1").show();
       });
  });
});
$(document).ready(function(){
  $("#img_2").click(function(){
    $("#img_2").toggle();
      $(".two").toggle();
       $(".two").click(function(){
        $(".two").hide();
        $("#img_2").show();
       });
  });
});
$(document).ready(function(){
  $("#img_3").click(function(){
    $("#img_3").toggle();
      $(".three").toggle();
       $(".three").click(function(){
        $(".three").hide();
        $("#img_3").show();
       });
  });
});


//hoover effect

$(function(){
  $(".space").hover(
  function() {
    $(this).stop().animate({"opacity": "0.5"},350 );
    $(".hove").show();   
  },
  function() {
    $(this).stop().animate({"opacity": "1"}, 400);
    $(".hove").hide();
  });
})


// business interface
$(document).ready(function() {
  $("#form_1").submit(function(event) {
    var nameInput = $("input#namebox").val();
    alert(nameInput + 'we have received your message.Thank you.');
    event.preventDefault();
  });
});












