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

	$(".mainCenterText textarea").focus(function(){
		$(this).parent().css("border-color","rgb(255,185,65)");
		var val=$(this).text();
		if (val=="中秋即将到来，说说你心目中的最佳赏月地！") {
			$(this).text("#最美赏月地#");
		};
		$(this).css("color","#000");
	}).blur(function(){
		$(this).parent().css("border-color","rgb(204,204,204)");
		var val=$(this).text();
		if (val=="#最美赏月地#") {
			$(this).text("中秋即将到来，说说你心目中的最佳赏月地！");
			$(this).css("color","rgb(128, 128, 128)");
		};	
	});
});


