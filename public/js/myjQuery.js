$(document).ready(function(){
	$("#thankYou").hide();
	$(".signUpButton").click(function(){
		$(this).hide();
		$(".signUpText").hide();
		$("#thankYou").show();
	});

});