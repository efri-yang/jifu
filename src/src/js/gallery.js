//相册的js
;
(function($) {
    $.fn.staffGallery = function(option) {

        var defaultsId = {
            bigPrevId: "J_staff-bigPrev",
            bigNextId: "J_staff-bigNext",
            bigPicTitId: "J_staff-bigPicTit",
            bigPicTxtId: "J_staff-bigPicTxt",
            smallListWrapId: "J_staff-smallListWrap",
            containerId: "J_staff-conBox"


        }
        $.fn.staffGallery.defaults = {
            smallPrevId: "J_staff-smallPrev",
            smallNextId: "J_staff-smallNext",
            smallListInnerId: "J_staff-smallListInner",
            smallDisPrevClass: "staff-dis-smallPrev",
            smallDisNextClass: "staff-dis-smallNext",
            smallDataClass: "staff-smallItem",
            smallWrapId: "J_staff-smallWrap",
            bigPicTitClass: "staff-bigPicTit",
            arrowId: "J_staff-arrow",
            bigPicWrapId: "J_staff-bigWrap",
            bigPrevClass: "staff-bigPrev",
            bigNextClass: "staff-bigNext",
            bigPicWrapW: 666,
            bigPicWrapH: 483,
            fixLen: 4, //第几张固定
            viewLen: 6, //滚动可见的长度
            arrowH: 50,
            scroW: 103,
            dir: "left",
            isTitShow: true,
            isBigBtnShow: true //是否显示标题													
        }
        var opts = $.extend(defaultsId, $.fn.staffGallery.defaults, option);
        var Index = 0,
            $smallPrev = $("#" + opts.smallPrevId),
            $smallNext = $("#" + opts.smallNextId),
            $container = $("#" + opts.containerId),
            $smallListInner = $("#" + opts.smallListInnerId),
            $arrow = $("#" + opts.arrowId),
            $bigPicWrap = $("#" + opts.bigPicWrapId);
        $smallListWrap = $("#" + opts.smallListWrapId);
        $smallWrap = $("#" + opts.smallWrapId)

        var nextDistance = opts.viewLen - opts.fixLen,
            $smallDataItems = $smallListInner.find("." + opts.smallDataClass);
        totalLen = $smallDataItems.length;
        var bigSrc,
            bigTit,
            $bigPicTit,
            $bigNext,
            $bigPrev,
            $bigPicTit,
            $bigPicTxt,
            $this = this;



        //获取图片信息和操作图片函数
        var changeBigImg = function(currIndex) {
            bigSrc = $smallDataItems.eq(currIndex).attr("href");
            bigTit = $smallDataItems.eq(currIndex).attr("data-title");
            $this.stop(false, true).fadeOut(200, function() {
                $this.attr("src", bigSrc).fadeIn()
            });
            if (opts.isTitShow) {
                $bigPicTit.animate({ top: opts.bigPicWrapH }, 200, function() {
                    if ($.trim(bigTit) != "") {
                        $bigPicTxt.text(bigTit);
                        $bigPicTit.show();
                    } else {
                        $bigPicTit.hide();
                    }
                    $bigPicTit.stop(false, true).animate({ top: opts.bigPicWrapH - opts.arrowH })
                })


            }
        };


        //初始化
        var Init = function() {
            if (opts.dir == "left") {
                $smallWrap.css({ width: opts.bigPicWrapW, overflow: "hidden" });
            }
            $this.parent().css({ width: opts.bigPicWrapW - 2, height: opts.bigPicWrapH - 2, overflow: "hidden" })
            if (totalLen == 1) {
                $smallWrap.hide();

            }
            $bigPicWrap.css({ width: opts.bigPicWrapW, height: opts.bigPicWrapH, position: "relative" })
            bigSrc = $smallDataItems.eq(Index).attr("href");
            bigTit = $smallDataItems.eq(Index).attr("data-title");
            $this.attr("src", bigSrc);
            if (opts.isTitShow) { //如果显示标题的话
                var $bigPicTxtDom = $('<div class="' + opts.bigPicTitClass + '" id="' + opts.bigPicTitId + '"><span></span><b id="' + opts.bigPicTxtId + '"></b></div>')
                $bigPicTxtDom.appendTo($bigPicWrap);
                $bigPicTit = $("#" + opts.bigPicTitId);
                $bigPicTxt = $("#" + opts.bigPicTxtId);
                $bigPicTit.css({ top: opts.bigPicWrapH - opts.arrowH }).hide();
                changeBigImg(Index)
            }
            if (opts.isBigBtnShow) { //如果显示大图按钮的话
                var $bigPrevBtn = $("<a href='#' class='" + opts.bigPrevClass + "' id='" + opts.bigPrevId + "'></a>");
                var $bigNextBtn = $("<a href='#' class='" + opts.bigNextClass + "' id='" + opts.bigNextId + "'></a>");
                $bigPrevBtn.appendTo($container);
                $bigNextBtn.appendTo($container);
            }
            $smallPrev.eq(Index).addClass(opts.smallDisPrevClass);
            if (totalLen <= opts.viewLen) {

            } else {
                if (opts.dir == "left") {
                    $smallListInner.width(totalLen * opts.scroW)
                } else {
                    $smallListInner.height(totalLen * opts.scroW)
                }
            }
            $smallListInner.css({ "position": "absolute", "overflow": "hidden" });
            if (opts.dir == "left") {
                $smallListWrap.css({ "width": opts.viewLen * opts.scroW, "position": "relative", "overflow": "hidden" });
            } else {
                $smallListWrap.css({ "height": opts.viewLen * opts.scroW, "position": "relative", "overflow": "hidden" });
            }



        };
        Init()

        //处理index 范围的函数
        var slideIndexChange = function(currIndex, Dir) {
            if (Dir == "left") {
                if (totalLen < opts.viewLen) {
                    $arrow.stop(false, true).animate({ left: currIndex * opts.scroW }, 200);
                    $smallListInner.animate({ left: 0 * opts.scroW })
                } else {
                    if (currIndex >= 0 && currIndex <= opts.fixLen - 1) { //0-3
                        $arrow.stop(false, true).animate({ left: currIndex * opts.scroW }, 200);
                        $smallListInner.animate({ left: 0 * opts.scroW })
                    } else if (currIndex > (opts.fixLen - 1) && currIndex < (totalLen - nextDistance)) { //4

                        $arrow.stop(false, true).animate({ left: (opts.fixLen - 1) * opts.scroW }, 200);
                        $smallListInner.animate({ left: -(currIndex - opts.fixLen + 1) * opts.scroW })
                    } else if (currIndex >= (totalLen - nextDistance)) { //5-7  

                        $arrow.stop(false, true).animate({ left: (opts.viewLen - (totalLen - currIndex)) * opts.scroW }, 200);
                        $smallListInner.animate({ left: -(totalLen - opts.viewLen) * opts.scroW })
                    }
                }
            } else if (Dir == "top") {
                if (totalLen < opts.viewLen) {
                    $arrow.stop(false, true).animate({ top: currIndex * opts.scroW }, 200);
                    $smallListInner.animate({ left: 0 * opts.scroW })
                } else {
                    if (currIndex >= 0 && currIndex <= opts.fixLen - 1) { //0-3
                        $arrow.stop(false, true).animate({ top: currIndex * opts.scroW }, 200);
                        $smallListInner.animate({ top: 0 * opts.scroW })
                    } else if (currIndex > (opts.fixLen - 1) && currIndex < (totalLen - nextDistance)) { //4
                        $arrow.stop(false, true).animate({ top: (opts.fixLen - 1) * opts.scroW }, 200);
                        $smallListInner.animate({ top: -(currIndex - opts.fixLen + 1) * opts.scroW })
                    } else if (currIndex >= (totalLen - nextDistance)) { //5-7   
                        $arrow.stop(false, true).animate({ top: (opts.viewLen - (totalLen - currIndex)) * opts.scroW }, 200);
                        $smallListInner.animate({ top: -(totalLen - opts.viewLen) * opts.scroW })
                    }
                }
            }
        }

        //单击prev按钮的事件函数
        var prevBtnHander = function(currIndex) {
            if (currIndex != totalLen - 1) {
                $smallNext.removeClass(opts.smallDisNextClass);
            }
            if (currIndex == 0) {
                $smallPrev.addClass(opts.smallDisPrevClass);
            }
            slideIndexChange(Index, opts.dir);

            changeBigImg(Index)
        };
        //单击next按钮的事件函数
        var NextBtnHander = function(currIndex) {
            if (Index != 0) {
                $smallPrev.removeClass(opts.smallDisPrevClass);
            }
            if (Index == (totalLen - 1)) {
                $smallNext.addClass(opts.smallDisNextClass)
            }

            if (Index <= opts.fixLen - 1) {
                if (opts.dir == "left") {
                    $arrow.stop(false, true).animate({ left: "+=" + opts.scroW }, 200)
                } else {
                    $arrow.stop(false, true).animate({ top: "+=" + opts.scroW }, 200)
                }
            } else {
                if ((totalLen - Index - nextDistance) <= 0) {
                    if (opts.dir == "left") {
                        $arrow.stop(false, true).animate({ left: "+=" + opts.scroW }, 200);
                    } else {
                        $arrow.stop(false, true).animate({ top: "+=" + opts.scroW }, 200);
                    }
                } else {
                    if (opts.dir == "left") {
                        $smallListInner.animate({ left: -(Index - opts.fixLen + 1) * opts.scroW })
                    } else {
                        $smallListInner.animate({ top: -(Index - opts.fixLen + 1) * opts.scroW })
                    }

                }
            }
            changeBigImg(Index)

        };


        //单击小图的左按钮	
        $smallPrev.bind("click", function() {
            if (Index == 0) {
                return false }
            Index--;
            prevBtnHander(Index)
            return false
        });


        //单击小图的右按钮	
        $smallNext.bind("click", function() {
            if (Index == (totalLen - 1)) {
                return false }
            Index++;
            NextBtnHander(Index);
            return false;
        });
        $smallDataItems.each(function() {
            $(this).bind("click", function() {
                var lastIndex = Index
                Index = $smallDataItems.index(this);
                if (Index == 0) { $smallPrev.addClass(opts.smallDisPrevClass); }
                if (Index == totalLen - 1) { $smallNext.addClass(opts.smallDisNextClass) }
                if (Index != 0) { $smallPrev.removeClass(opts.smallDisPrevClass); }
                if (Index != totalLen - 1) { $smallNext.removeClass(opts.smallDisNextClass) }
                var distanceIndex = Math.abs(lastIndex - Index);
                changeBigImg(Index);
                slideIndexChange(Index, opts.dir);
                return false;
            })
        })

        if (opts.isBigBtnShow && totalLen != 1) {
            $bigNext = $("#" + opts.bigNextId);
            var bigNextH = $bigNext.height();
            $bigPrev = $("#" + opts.bigPrevId);
            var bigPrevH = $bigPrev.height();
            $bigNext.css("top", (opts.bigPicWrapH - bigNextH) / 2);
            $bigPrev.css("top", (opts.bigPicWrapH - bigPrevH) / 2)
                //单击大图的右按钮
            $bigNext.bind("click", function() {
                    Index++;
                    if (Index != 0) { $bigPrev.show(); }
                    if (Index == totalLen - 1) { $(this).hide() }
                    NextBtnHander(Index)
                    return false;
                })
                //单击大图的左按钮
            $bigPrev.bind("click", function() {

                Index--;
                if (Index != totalLen - 1) { $bigNext.show(); }
                if (Index == 0) { $(this).hide() }
                prevBtnHander(Index);
                return false
            });
            //大图 $bigWrap hover的时候的效果
            // $bigPicWrap.bind("mouseover", function(event) {
            //     var relateElem = event.relatedTarget;
            //     if ($(relateElem).closest($bigPicWrap).length > 0) {
            //         return;
            //     } else {
            //         if (Index == totalLen - 1) {
            //             $bigPrev.stop(false, true).fadeIn();
            //         } else if (Index == 0) {
            //             $bigNext.stop(false, true).fadeIn()
            //         } else {
            //             $bigPrev.stop(false, true).fadeIn();
            //             $bigNext.stop(false, true).fadeIn()
            //         }
            //     }
            // }).bind("mouseout", function(event) {
            //     var relateElem = event.relatedTarget;
            //     if ($(relateElem).closest($bigPicWrap).length > 0) {
            //         return;
            //     } else {
            //         $bigPrev.stop(false, true).fadeOut();

            //         $bigNext.stop(false, true).fadeOut()
            //     }

            // });
        }

    }
})(jQuery);

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
})