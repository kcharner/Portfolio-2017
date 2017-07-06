// setting default page-load to portfolio
$("#about").hide();
$("#contact").hide();

// setting up on-click events for displaying info
$("#aboutBtn").on("click", function() {
	$("#portfolio").hide();
	$("#about").show();
	$("#contact").hide();
});

$("#contactBtn").on("click", function () {
	$("#portfolio").hide();
	$("#about").hide();
	$("#contact").show();
}); 

$("#portfolioBtn").on("click", function() {
	$("#portfolio").show();
	$("#about").hide();
	$("#contact").hide();
});

$("#banner").hover(function(){
    $(this).css("background-image", "none");
    }, function(){
    $(this).css("background-color", "pink");
});