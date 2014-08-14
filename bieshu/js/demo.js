$(function(){
	$(".flashCtrl").click(function(){
		currID = $(this).attr("picId")
		showFlashImage();
	});
	$("#flash").hover(function(){
		clearInterval(timeHeadle);
	},function(){
		timeHeadle = setInterval("showFlashImage()",1500)
	});
	timeHeadle = setInterval("showFlashImage()",1500)
});

var  currID = 2;
function showFlashImage(){
	$("#flash").css("background-image", 'url("css/image/' + currID +'.jpg")');
	$(".flashCtrl").removeClass("active");
	$("#ctrlSpan" + currID).addClass("active");
	currID++;
	if (currID == 6) {
		currID = 1};

}

