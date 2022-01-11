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
  $(".space1").hover(
  function() {
    $(this).stop().animate({"opacity": "0.5"},350 );
    $(".hove1").show();   
  },
  function() {
    $(this).stop().animate({"opacity": "1"}, 400);
    $(".hove1").hide();
  });
})

$(function(){
  $(".space2").hover(
  function() {
    $(this).stop().animate({"opacity": "0.5"},350 );
    $(".hove2").show();   
  },
  function() {
    $(this).stop().animate({"opacity": "1"}, 400);
    $(".hove2").hide();
  });
})

$(function(){
  $(".space3").hover(
  function() {
    $(this).stop().animate({"opacity": "0.5"},350 );
    $(".hove3").show();   
  },
  function() {
    $(this).stop().animate({"opacity": "1"}, 400);
    $(".hove3").hide();
  });
})

$(function(){
  $(".space4").hover(
  function() {
    $(this).stop().animate({"opacity": "0.5"},350 );
    $(".hove4").show();   
  },
  function() {
    $(this).stop().animate({"opacity": "1"}, 400);
    $(".hove4").hide();
  });
})

$(function(){
  $(".space5").hover(
  function() {
    $(this).stop().animate({"opacity": "0.5"},350 );
    $(".hove5").show();   
  },
  function() {
    $(this).stop().animate({"opacity": "1"}, 400);
    $(".hove5").hide();
  });
})

$(function(){
  $(".space6").hover(
  function() {
    $(this).stop().animate({"opacity": "0.5"},350 );
    $(".hove6").show();   
  },
  function() {
    $(this).stop().animate({"opacity": "1"}, 400);
    $(".hove6").hide();
  });
})

$(function(){
  $(".space7").hover(
  function() {
    $(this).stop().animate({"opacity": "0.5"},350 );
    $(".hove7").show();   
  },
  function() {
    $(this).stop().animate({"opacity": "1"}, 400);
    $(".hove7").hide();
  });
})

$(function(){
  $(".space8").hover(
  function() {
    $(this).stop().animate({"opacity": "0.5"},350 );
    $(".hove8").show();   
  },
  function() {
    $(this).stop().animate({"opacity": "1"}, 400);
    $(".hove8").hide();
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












