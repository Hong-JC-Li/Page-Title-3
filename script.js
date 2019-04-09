$(".Submit").click(function() {
    var pey = $(".second").val();
    var nope = $(".first").val();
    $(".h1").text("What Simpsons character are you?");
    $(".h3").text("How many memes do you watch every day?");
    $(".h31").text("Chungus or Thanos?");
    if (nope <= 20 && pey === "Chungus") {
        $(".one").show();
        $(".two").hide();
        $(".three").hide();
        $(".four").hide();
        $(".five, .six").hide();
    } else if (nope <= 20 && pey === "Thanos") {
        $(".two").show();
        $(".one").hide();
        $(".three").hide();
        $(".five, .six").hide();
        $(".four").hide();
    } else if (nope > 20 && pey === "Thanos") {
        $(".three").show();
        $(".two").hide();
        $(".one").hide();
        $(".four").hide();
        $(".five, .six").hide();
    } else if (nope > 20 && pey === "Chungus") {
        $(".four").show();
        $(".two").hide();
        $(".three").hide();
        $(".five, .six").hide();
        $(".one").hide();
    } else if (pey==="Wikipedia") {
        $("h1, h3").text("How did you know I stole all the images from Wikipedia?");
        $(".five, .six").show();
        $(".four").hide();
        $(".two").hide();
        $(".three").hide();
        $(".one").hide();
    } else if (pey==="" && nope==="") {
        $("h1,h3").text("Forgot to put in your answers?");
        $(".one, .two, .three, .four, .five, .six").hide();
    } else if (pey==="") {
        $("h1, h3").text("You don't watch memes?");
        $(".one, .two, .three, .four, .five, .six").hide();
    }});
$(".margin").click(function() {
    var pey = $(".second").val();
    var nope = $(".first").val();
    if (pey==="Nahasapeemapetilon") {
        $("h1, h3").text("Banhammer in five");
        $(".five, .four, .three, .one, .two").hide();
        $(".six").show();
}});