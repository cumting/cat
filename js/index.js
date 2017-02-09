 $(document).ready(function(){
	$("#my_taobao").hover(function() {
		$(".mytaobao_detail").show();
		
	});
	$("#my_taobao").mouseleave(function() {
		$(".mytaobao_detail").hide();
		
	});
})





// 右导航栏 
$(function(){
	
	function showtime(){
        $(".right_bar").show();
    };
     var test = setTimeout(function(){
        showtime()
    },2000);
})

// 左二级
// $(document).ready(function(){
// 	$(".menu_list li:nth-child(1)").hover(function() {
// 		$(".menu_list_second").stop().fadeToggle();
		
// 	});
// 	$('#menu_list .nvzhuang').mouseleave(function(){
// 		$('.menu_list_second').hide();
// 	});

// })


// 轮播
$(function(){
	var i=0;
	var sWidth = document.body.scrollWidth;
	var clone=$(".banner .img li").first().clone();
	$(".banner .img").append(clone);	
	var size=$(".banner .img li").size();	
	for(var j=0;j<size-1;j++){
		$(".banner_btn .num").append("<li></li>");
	}
	$(".banner_btn .num li").first().addClass("on");
	/*鼠标划入圆点*/
	$(".banner_btn .num li").hover(function(){
		var index=$(this).index();
		i=index;
		$(".banner .img").stop().animate({left:-index*(1366)},800)	
		$(this).addClass("on").siblings().removeClass("on")		
	})
	/*自动轮播*/
	var t=setInterval(function(){
		i++;
		move();
	},4000)
	/*对banner定时器的操作*/
	$(".banner_btn").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(function(){
			i++;
			move()
		},4000);
	})
	function move(){
		if(i==size){
			$(".banner  .img").css({left:0})			
			i=1;
		}
		if(i==-1){
			$(".banner .img").css({left:-(size-1)*(1366)})
			i=size-2;
		}
		$(".banner .img").stop().animate({left:-i*(1366)},800)
		if(i==size-1){
			$(".banner_btn .num li").eq(0).addClass("on").siblings().removeClass("on")	
		}else{		
			$(".banner_btn .num li").eq(i).addClass("on").siblings().removeClass("on")	
		}
	}	
})

// 品牌街 
$(function(){
	// $('.brand_img').mouseover(function(){
	// 	$(this).next().css('display','inline-block');
	// });
	// $('.brand_img').mouseleave(function(){
	// 	$(this).next().css('display','none');
	// });
	$(".hot_brand .brand_img").mouseover(function() {
		$(this).siblings().fadeIn(80).mouseleave(function(){
			$(this).fadeOut(80);
		});
	});
})
// 下拉搜索栏
$(function(){
	$(window).scroll(function(){
		var t=$(this).scrollTop();
		if(t>500){
			$('.search_bar,.left_bar').fadeIn(300);
		}


	else{
		$('.search_bar,.left_bar').fadeOut(300);
	};



});
});



// 亲子文字滚动
 
                   function autoScroll(obj){  

                       $(obj).find(".list").animate({  

                           marginTop : "-25px"  

                       },500,function(){  

                           $(this).css({marginTop : "0px"}).find("li:first").appendTo(this);  

                       })  

                   }  ;
$(function(){



                   $(function(){  

                       setInterval('autoScroll(".kind_word")',3000)  

                   });  
});

// 左导航栏
$(function(){


$(window).scroll(function() {
		var t = $(this).scrollTop();
		if (1557<=t&&t<2057) {
			$(".left_bar li:nth-child(2)").css("background-color","#F6B056")
		}
		else
		{
			$(".left_bar li:nth-child(2)").css("background-color","#626262")
		};
		if (2057<=t&&t<2557) {
			$(".left_bar li:nth-child(3)").css("background-color","#21ADE9")
		}
		else
		{
			$(".left_bar li:nth-child(3)").css("background-color","#626262")
		};
		if (2557<=t&&t<3157) {
			$(".left_bar li:nth-child(4)").css("background-color","#2ECCB0")
		}
		else
		{
			$(".left_bar li:nth-child(4)").css("background-color","#626262")
		};
		if (3157<=t&&t<3657) {
			$(".left_bar li:nth-child(5)").css("background-color","#72C746")
		}
		else
		{
			$(".left_bar li:nth-child(5)").css("background-color","#626262")
		};
		if (3657<=t&&t<4157) {
			$(".left_bar li:nth-child(6)").css("background-color","#EB6D97")
		}
		else
		{
			$(".left_bar li:nth-child(6)").css("background-color","#626262")
		};
		if (4157<=t&&t<4757) {
			$(".left_bar li:nth-child(7)").css("background-color","#F15453")
		}
		else
		{
			$(".left_bar li:nth-child(7)").css("background-color","#626262")
		};
         if (4757<=t&&t<5557) {
			$(".left_bar li:nth-child(8)").css("background-color","#DD2727")
		}
		else
		{
			$(".left_bar li:nth-child(8)").css("background-color","#626262")
		};
		 if (5557<=t&&t<6257) {
			$(".left_bar li:nth-child(9)").css("background-color","#DD2727")
		}
		else
		{
			$(".left_bar li:nth-child(9)").css("background-color","#626262")
		};
		
	});

$('.left_bar li:nth-child(2)').hover(function(){
	$(this).css('background-color','#F6B056').mouseleave(function(){
		$(this).css('background-color','#626262').click(function(){
			$("body,html").stop().animate({
			scrollTop:1750
		}, 800);
		})
	})
})

$('.left_bar li:nth-child(3)').hover(function(){
	$(this).css('background-color','#21ADE9').mouseleave(function(){
		$(this).css('background-color','#626262').click(function(){
			$("body,html").stop().animate({
			scrollTop:2350
		}, 800);
		})
	})
})
$('.left_bar li:nth-child(4)').hover(function(){
	$(this).css('background-color','#2ECCB0').mouseleave(function(){
		$(this).css('background-color','#626262').click(function(){
			$("body,html").stop().animate({
			scrollTop:2829
		}, 800);
		})
	})
})

$('.left_bar li:nth-child(5)').hover(function(){
	$(this).css('background-color','#72C746').mouseleave(function(){
		$(this).css('background-color','#626262').click(function(){
			$("body,html").stop().animate({
			scrollTop:3429
		}, 800);
		})
	})
})
$('.left_bar li:nth-child(6)').hover(function(){
	$(this).css('background-color','#EB6D97').mouseleave(function(){
		$(this).css('background-color','#626262').click(function(){
			$("body,html").stop().animate({
			scrollTop:3929
		}, 800);
		})
	})
})

$('.left_bar li:nth-child(7)').hover(function(){
	$(this).css('background-color','#F15453').mouseleave(function(){
		$(this).css('background-color','#626262').click(function(){
			$("body,html").stop().animate({
			scrollTop:4420
		}, 800);
		})
	})
})

$('.left_bar li:nth-child(8)').hover(function(){
	$(this).css('background-color','#000').mouseleave(function(){
		$(this).css('background-color','#626262').click(function(){
			$("body,html").stop().animate({
			scrollTop:4991
		}, 800);
		})
	})
})
$('.left_bar li:nth-child(9)').hover(function(){
	$(this).css('background-color','#000').mouseleave(function(){
		$(this).css('background-color','#626262').click(function(){
			$("body,html").stop().animate({
			scrollTop:5805
		}, 800);
		})
	})
})

})
// $(function(){
// 	alert($(document).scrollTop() );
// })
