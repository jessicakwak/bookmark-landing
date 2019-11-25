$(".feature-btn").on("click", function(){
  $(this).addClass("active-tab");
  $(".feature-btn").not($(this)).removeClass("active-tab");
  });

$(".questions").on("click", function(){
  var index = Number($(".questions").index($(this)))+1;
  if(index===4){
    $("#a-"+index).addClass("q-bottom");
    $(".q-4").toggleClass("q-bottom");
  }
  if($("#arrow-"+index).attr("src").slice(18,21)==="red"){
    $("#arrow-"+index).attr("src", "images/icon-arrow.svg")
  }else{
    $("#arrow-"+index).attr("src", "images/icon-arrow-red.svg")
  }
  $(".txt-"+index).toggleClass("q-txt-active");
  $("#a-"+index).slideToggle(300);
})

$(".cta-btn").on("click", function(){
  var input = $(".cta-email").val();
  var atSign = input.indexOf("@");
  var domain = input.slice(atSign,input.length).indexOf(".");
  if(atSign===-1 || atSign===0){
    $(".err-icon").fadeIn();
    $(".err").css("background-color","hsl(0, 94%, 66%)");
    $(".err p").fadeIn();
    $(".cta-email").addClass("red-highlight");
  }else if(domain ===-1 ||domain===0){
    $(".err-icon").fadeIn();
    $(".err").css("background-color","hsl(0, 94%, 66%)");
    $(".err p").fadeIn();
    $(".cta-email").addClass("red-highlight");
}});

$(".cta-email").on("blur", function(){
  if($(".cta-email").val() === ""){
    $(".err-icon").fadeOut();
    $(".errg p").hide();
    $(".err").css("background-color","hsl(231, 69%, 60%)");
    $(".cta-email").removeClass("red-highlight");
  }
})
