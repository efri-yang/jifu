/**
 *相册内容
 */

$(function(){
	$("#J_staff-bigPic").staffGallery({
	    fixLen:5,//固定在第几张
		isTitShow:true,
		isBigBtnShow:true,
		bigPicWrapW:930,//大图的宽度
		bigPicWrapH:500,//大图高度	
		viewLen:6,//滚动可见的长度
		scroW:144,//li的宽度+边框+margin
		dir:"left"//滚动方向向左									
	});

	/**实时行情 左右滚动效果**/
	(function(){
		var $container=$("#J_scroller-box");
		var $prev=$container.find(".prev").eq(0);
		var $next=$container.find(".next").eq(0);
		var $ul=$container.find("ul").eq(0);
		var $li=$ul.children('li');
		var singleW=$li.eq(0).outerWidth();
		var viewLen=9;
		var viewW=viewLen*singleW;

		var totalPage=Math.ceil($li.length/viewLen);
		var currentPage=0;

		function scrolling(dir){
			var str=(dir>0) ? "-" : "+";
			$ul.stop(false, true).animate({left: str+currentPage*viewW},300);
		}
		$prev.on("click",function(){
			if($ul.is(":animated") || totalPage<=1 || currentPage==0) return;	
			currentPage--;
			
			scrolling(-1);

		});

		$next.on("click",function(){
			if($ul.is(":animated") || totalPage<=1 || currentPage>=(totalPage-1)) return;
			currentPage++;
			
			scrolling(1);

		})
	})()		
});
