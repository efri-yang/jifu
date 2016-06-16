/**
 *相册内容
 */

$(function(){
	

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
	})();

	/**研究团队效果**/
	(function(){
		var $pre=$("#J_yjtd-gallery-prev");
		var $next=$("#J_yjtd-gallery-next");
		var $ul=$("#J_yjtd-gallery-list");
		var $lis=$ul.children("li");
		var lens=$lis.length;
		var currIndex=0;
		var viewLen=5;
		var singleW=$lis.eq(0).outerWidth();
		if(lens <=5){
			$pre.hide();
			$next.hide();
			return;
		}
		$ul.width(lens*singleW);
		function scrolling(dir){
			var str=(dir>0) ? "-=" : "+=";
			$ul.stop(false, true).animate({left: str+singleW},300);
		}
		$pre.on("click",function(event){
			event.preventDefault();
			if($ul.is(":animated")) return;
			if(currIndex <=0) return;
			if(currIndex<=(lens-viewLen)){
				currIndex--;
				scrolling(-1)
			}
		});
		$next.on("click",function(event){
			event.preventDefault();
			if($ul.is(":animated")) return;
			if(currIndex<=(lens-viewLen-1)){
				currIndex++;
				scrolling(1)
			}
		})
	})()		
});
