$(function(){$("#J_banner-list").bannerSlider({width:"100%",height:500,auto:!0,effect:"fade",Pause:3e3,animTime:250,zIndex:10,parentClass:"banner",btn:{show:!1,dynamic:!1},pagination:{show:!0,evtType:"mouseover",className:"banner-numlist"},describe:{show:!1}}),$("#J_news-list").children("li").each(function(){var i=$(this);i.bind("mouseover",function(){i.find(".bd").show().end().siblings().find(".bd").hide()})})}),function(){$(function(){function i(){return d.addClass("disabled"),h<=1?void a.addClass("disabled"):void t.width(n)}function e(i){var e=i>0?"-=":"+=";t.stop(!1,!0).animate({left:e+c},300,function(){f>=h-1?a.addClass("disabled"):f<=0?d.addClass("disabled"):(a.removeClass("disabled"),d.removeClass("disabled"))})}var n,s=$("#J_home-enterprise-index"),d=s.find(".prev"),a=s.find(".next"),t=s.find(".list").eq(0),l=t.children("li").length,o=t.children("li").eq(0).outerWidth(),r=7,c=7*o,h=Math.ceil(l/r),f=0;i(),d.on("click",function(){var i=$(this);i.hasClass("disabled")||t.is(":animated")||(f--,e(-1),console.dir("prev"))}),a.on("click",function(){var i=$(this);i.hasClass("disabled")||t.is(":animated")||(f++,e(1),console.dir("next"))})})}();