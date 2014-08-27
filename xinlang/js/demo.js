$(function(){
	$(".topSouCon").hide();
	$("#topSou input").click(function(){
		$(".topSouCon").slideDown();
	})
	$("body").click(function(){
		$(".topSouCon").hide();
	});

	$(".topSet").hover(function(){
		$(this).find(".topCon").show();
	},function(){
		$(this).find(".topCon").hide();
	})

	$(".topMenuLeft").hover(function(){
		$(this).find(".topMenuLeft").css("background-color","#FAFAFA")
		$(this).find(".topMenuLeftTitle").css("color","#333333")
		$(this).find(".topMenuAll").show();
	},function(){
		$(this).find(".topMenuLeftTitle").css("color","")
		$(this).find(".topMenuAll").hide();
	})

});


