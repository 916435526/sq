$(function(){
	$("#content_right").hide()
	$("#login_top_left").click(function(){
		$("#content_left").show()
		$("#content_right").hide()
		$("#login_top_right").css("color","red")
		$("#login_top_left").css("color","yellow")
		$("#login_top_right").css("border-bottom","solid #dcdcdc")
	})
	$("#login_top_right").click(function(){
		$("#content_left").hide()
		$("#content_right").show()
		$("#login_top_right").css("color","yellow")
		$("#login_top_left").css("color","red")
		$("#login_top_right").css("border-bottom","")
		$("#login_top_left").css("border-bottom","1px solid #dcdcdc")

	});
});