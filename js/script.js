$(document).ready(function() {

  $("#box1").mouseover(function(){
    $(this).text("Cadastre-se").css("color", "red")
});

$("#box2").mouseover(function(){
  $(this).text("ЭТО БЛОК 2").css("color", "red")
});

$("#box3").mouseover(function(){
  $(this).text("ЭТО БЛОК 3").css("color", "red")
});

$("#box4").mouseover(function(){
  $(this).text("ЭТО БЛОК 4").css("color", "red")
});

$("#box5").mouseover(function(){
  $(this).text("ЭТО БЛОК 5").css("color", "red")
});

$("#box6").mouseover(function(){
  $(this).text("ЭТО БЛОК 6").css("color", "red")
});

});

$(".box").mouseout(function(){
  $(this).text("")
});
