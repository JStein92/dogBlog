$(".col-md-8").css("visibility", "hidden");
$("#link1").css("visibility", "hidden");
$("#link2").css("visibility", "hidden");
$("#link3").css("visibility", "hidden");
$(".splash p").css("visibility", "hidden");
$(document).ready(function(){

$(".col-md-8").css("visibility", "visible");
$(".col-md-8").hide();
$(".col-md-8").fadeIn(2000);

$('#title').animate({
  fontSize:'5em'},{
    duration: 1200,
    complete: function(){
        $("#link1").hide();
        $("#link2").hide();
        $("#link3").hide();
      $("#link1").css("visibility", "visible");
      $("#link2").css("visibility", "visible");
      $("#link3").css("visibility", "visible");
      $("#link1").fadeIn(1000);
      $("#link2").fadeIn(1400);
      $("#link3").fadeIn(1800);

        $(".splash .col-md-8").animate({
          paddingTop: "10px",
          marginBottom: "100px"
        },{
            duration: 800,

              complete: function(){
                $(".splash p").hide();
                $(".splash p").fadeIn(1000);
                $(".splash p").css("visibility", "visible");
              }
        });
    }
  }

  );


  $(".splash a").hover(function(){
    $(this).stop().animate({borderBottomWidth: "15px"});
  });
  $(".splash a").mouseleave(function(){
    $(this).stop().animate({borderBottomWidth: "5px"});
  });

});
