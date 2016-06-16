
    $(function() {
        $("#J_banner-list").bannerSlider({
            width: "100%", //宽 (如果100%的时候请传入字符串)
            height: 500, //高
            auto: true, //是否能自动滚
            effect: "fade", //效果
            Pause: 3000, //停顿时间-两个动画滚动间隔的时间
            animTime: 250, //一张图滚动的时间
            zIndex: 10, //设置层级相互遮盖
            parentClass: "banner",
            btn: {
                show: false,
                dynamic: false
            },
            pagination: {
                show: true,
                evtType: "mouseover",
                className: "banner-numlist"
            },
            describe: {
                show: false
            }
        });

        $("#J_news-list").children("li").each(function(){
            var $this=$(this);
            $this.bind("mouseover",function(){
                $this.find(".bd").hide().end()
                    .siblings().find(".bd").show();
            })
        });
    });
    (function(){
        $(function(){
            var $container=$("#J_home-enterprise-index");
            var $prev=$container.find(".prev");
            var $next=$container.find(".next");
            var $list=$container.find(".list").eq(0);
            var totalLen=$list.children('li').length;
            var singleW=$list.children('li').eq(0).outerWidth();
            var viewLen=7;
            var viewW=singleW*7;
            var remainW,totalW;
            var pageTotal=Math.ceil(totalLen/viewLen);
            var currentPage=0;
            function init(){
                $prev.addClass('disabled');
                if(pageTotal<=1){
                   $next.addClass("disabled");
                   return; 
                }
                $list.width(totalW);
            }
            init();
            
            function scrolling(dir){
                var str=(dir > 0) ? "-=" :"+=";
                $list.stop(false,true).animate({left:str+viewW},300,function(){
                   if(currentPage >= (pageTotal-1)){
                        $next.addClass("disabled");
                   }else if(currentPage<=0){
                        $prev.addClass('disabled');
                   }else{
                         $next.removeClass('disabled');
                        $prev.removeClass('disabled');
                   }
                })
                
            }
            $prev.on("click",function(){
                var $this=$(this);
                if($this.hasClass('disabled')) return;
                if($list.is(":animated")) return;
                currentPage--;
                scrolling(-1)
                console.dir("prev")

            });
            $next.on("click",function(){
                var $this=$(this);
                if($this.hasClass('disabled')) return;
                if($list.is(":animated")) return;
                currentPage++;
                scrolling(1)
               console.dir("next")
            })
        })
    })()
