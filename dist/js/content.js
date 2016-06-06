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
	})		

})
