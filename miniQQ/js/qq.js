$(function(){

	$(".friendA").click(function(){
		var friendID = $(this).attr("friendID");
		var chatDivID = "chat" + friendID;
		if ($(this).attr("isOpen") == "true") {
			//将已经打开的窗口置顶
			$(".qqChat").css("z-index","15");
			$("#" + chatDivID).css("z-index","16");
			return;
		}
		$(this).attr("isOpen","true");
		
		var friendName = $(this).attr("friendName");
		var html ="";
		html += '		<div id="' + chatDivID + '" class="qqChat">';
		html += '			<div class="chatTitle">';
		html += '				<div class="chatMenu"></div>';
		html += '				<div class="chatFriendName">' + friendName +'</div>';
		html += '				<div friendAID = "friendA'+friendID+'" chatDivID="' + chatDivID + '" class="chatClose">关闭</div>';
		html += '			</div>';
		html += '			<div class="chatHistory"></div>';
		html += '			<div class="chatBottm">';
		html += '           	<textarea class="shuRuKhuang"></textarea>'
		html += '           	<div class="fasong">发送</div> '
		html += '			</div>';
		html += '		</div>';

		$("body").append(html);

		//置顶
		$(".qqChat").click(function(){
			$(".qqChat").css("z-index","15");
			$(this).css("z-index","16");
		});
		$(".chatClose").click(function(){
			var curCloseDivID = $(this).attr("chatDivID");
			$("#" + curCloseDivID).remove();


			var friendAid = $(this).attr("friendAID");
			$("#" + friendAid).attr("isOpen","false");

			
		});

		var divTop = Math.random()*100+10;
		var divLeft = Math.random()*240+320;

		$("#" + chatDivID).css({
			"top": divTop + "px",
			"left": divLeft + "px"
		});
	});
	
	$("#closeimage").click(function(){
		$("#qq").hide();
	});

	$("#yongHu").show();
	$("#lianxirenlibiao").hide();
	$("#faixanlibiao").hide();
	$("#shezhilibiao").hide();
	$("#contrlhuiHua").click(function(){
		$("#yongHu").show();
		$("#lianxirenlibiao").hide();
		$("#faixanlibiao").hide();
		$("#shezhilibiao").hide();
		$("#contrlhuiHua").css("background-image","url('image/huiHuaclick.png')");
		$("#contrllianXiren").css("background-image","url('image/lianXiren.png')");
		$("#contrlfaXian").css("background-image","url('image/faXian.png')");
		$("#contrlsheZhi").css("background-image","url('image/sheZhi.png')");

		$("#contrlhuiHua").css("background-color","#1E1E1E");
		$("#contrllianXiren").css("background-color","#373737");
		$("#contrlfaXian").css("background-color","#373737");
		$("#contrlsheZhi").css("background-color","#373737");
		
	});
	$("#contrllianXiren").click(function(){
		$("#yongHu").hide();
		$("#lianxirenlibiao").show();
		$("#faixanlibiao").hide();
		$("#shezhilibiao").hide();
		$("#contrlhuiHua").css("background-image","url('image/huiHua.png')");
		$("#contrllianXiren").css("background-image","url('image/lianXirenclick.png')");
		$("#contrlfaXian").css("background-image","url('image/faXian.png')");
		$("#contrlsheZhi").css("background-image","url('image/sheZhi.png')");

		$("#contrlhuiHua").css("background-color","#373737");
		$("#contrllianXiren").css("background-color","#1E1E1E");
		$("#contrlfaXian").css("background-color","#373737");
		$("#contrlsheZhi").css("background-color","#373737");
		
	});
	$("#contrlfaXian").click(function(){
		$("#yongHu").hide();
		$("#lianxirenlibiao").hide();
		$("#faixanlibiao").show();
		$("#shezhilibiao").hide();
		$("#contrlhuiHua").css("background-image","url('image/huiHua.png')");
		$("#contrllianXiren").css("background-image","url('image/lianXiren.png')");
		$("#contrlfaXian").css("background-image","url('image/faXianclick.png')");
		$("#contrlsheZhi").css("background-image","url('image/sheZhi.png')");

		$("#contrlhuiHua").css("background-color","#373737");
		$("#contrllianXiren").css("background-color","#373737");
		$("#contrlfaXian").css("background-color","#1E1E1E");
		$("#contrlsheZhi").css("background-color","#373737");
	});
	$("#contrlsheZhi").click(function(){
		$("#yongHu").hide();
		$("#lianxirenlibiao").hide();
		$("#faixanlibiao").hide();
		$("#shezhilibiao").show();
		$("#contrlhuiHua").css("background-image","url('image/huiHua.png')");
		$("#contrllianXiren").css("background-image","url('image/lianXiren.png')");
		$("#contrlfaXian").css("background-image","url('image/faXian.png')");
		$("#contrlsheZhi").css("background-image","url('image/sheZhiclick.png')");

		$("#contrlhuiHua").css("background-color","#373737");
		$("#contrllianXiren").css("background-color","#373737");
		$("#contrlfaXian").css("background-color","#373737");
		$("#contrlsheZhi").css("background-color","#1E1E1E");
	});
});

