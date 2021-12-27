$(document).ready(function(){
  $("#img_1").click(function(){
    // $("#content11").css("bold","center");
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
    // $("#content11").css("bold","center");
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
    // $("#content11").css("bold","center");
    $("#img_3").toggle();
      $(".three").toggle();
       $(".three").click(function(){
        $(".three").hide();
        $("#img_3").show();
       });

  });
});


// $(document).ready(function(){
//   $("#img_1").click(function()})
//     $(".one").show();
//   }
// });