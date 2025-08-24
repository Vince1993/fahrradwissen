// A $( document ).ready() block.
$( document ).ready(function() {
    $("#triagram").on("click", trigger_nav);
    $(".click_to_open").on("click", open_instruction);
    
    $("#scroll_up").on("click", toTop);
});

function trigger_nav(){
    let state_of_nav = $("#nav_header").css("display");
    if(state_of_nav == "none"){
        $("#nav_header").show(550);}
    else{
         $("#nav_header").hide(550);}
}

function open_instruction(){
    let state_of_instruction = $(this).parent().nextAll("div").first().css("display");
        if(state_of_instruction == "none"){
            $(this).parent().nextAll("div").first().show(1200, "linear");}
        else{
            $(this).parent().nextAll("div").first().hide(250);}
}

function toTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

