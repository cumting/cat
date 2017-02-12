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



// 右导航栏效果
$(function(){
	$('.user_pic').mouseover(function(){
		$('.right_bar2 .d1').show()
	});
	$('.user_pic').mouseleave(function(){
			$('.right_bar2 .d1').css('display','none');
		})
	$('.pay_pic').mouseover(function(){
		$('.right_bar2 .d2').show()
	})
	$('.pay_pic').mouseleave(function(){
			$('.right_bar2 .d2').hide();

		})
	$('.heart_pic').mouseover(function(){
		$('.right_bar2 .d3').show()
	})
	$('.heart_pic').mouseleave(function(){
			$('.right_bar2 .d3').hide();
		})
	$('.star_pic').mouseover(function(){
		$('.right_bar2 .d4').show()
	})
	$('.star_pic').mouseleave(function(){
			$('.right_bar2 .d4').hide();
		})
	$('.looked_pic').mouseover(function(){
		$('.right_bar2 .d5').show()
	})
	$('.looked_pic').mouseleave(function(){
			$('.right_bar2 .d5').hide();
		})
	$('.charge_pic').mouseover(function(){
		$('.right_bar2 .d6').show()
	})
	$('.charge_pic').mouseleave(function(){
			$('.right_bar2 .d6').hide();
		})
	$('.feedback_pic').mouseover(function(){
		$('.right_bar2 .d7').show()
	})
	$('.feedback_pic').mouseleave(function(){
			$('.right_bar2 .d7').hide();
		})
	$('.2dcode_pic').mouseover(function(){
		$('.weima').show()
	})
	$(document).click(function(){
		$('.weima').hide()
	})
$('.top_pic').mouseover(function(){
		$('.right_bar2 .d9').show()
	})
	$('.top_pic').mouseleave(function(){
			$('.right_bar2 .d9').hide();
		})

})
// 左二级
$(function(){
	$('.menu_list ul li:first-child,.menu_list_second').hover(function(){
		$('.menu_list_second').show();
		$('.menu_list ul li:first-child,.menu_list ul li:first-child a').css({"background-color":"#fff","color":"#E98FBD"});

	})
	$('.menu_list ul li:first-child,.menu_list_second').mouseleave(function(){
			$('.menu_list_second').hide();

		$('.menu_list ul li:first-child,.menu_list ul li:first-child a').css({"background-color":"#EEEEEE","color":"#2C2C2C"});	
		});
})


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
		$(this).css('background-color','#626262');
	})

})
$('.left_bar li:nth-child(2)').click(function(){
			$("body,html").stop().animate({
			scrollTop:1750
		}, 800);
		})
$('.left_bar li:nth-child(3)').hover(function(){
	$(this).css('background-color','#21ADE9').mouseleave(function(){
		$(this).css('background-color','#626262')
	})
})
 $('.left_bar li:nth-child(3)').click(function(){
			$("body,html").stop().animate({
			scrollTop:2350
		}, 800);
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
$('.left_bar li:nth-child(4)').click(function(){
			$("body,html").stop().animate({
			scrollTop:2829
		}, 800);
		})
$('.left_bar li:nth-child(5)').hover(function(){
	$(this).css('background-color','#72C746').mouseleave(function(){
		$(this).css('background-color','#626262')
	})
})
 $('.left_bar li:nth-child(5)').click(function(){
			$("body,html").stop().animate({
			scrollTop:3429
		}, 800);
		})
$('.left_bar li:nth-child(6)').hover(function(){
	$(this).css('background-color','#EB6D97').mouseleave(function(){
		$(this).css('background-color','#626262')
	})
})
$('.left_bar li:nth-child(6)').click(function(){
			$("body,html").stop().animate({
			scrollTop:3929
		}, 800);
		})
$('.left_bar li:nth-child(7)').hover(function(){
	$(this).css('background-color','#F15453').mouseleave(function(){
		$(this).css('background-color','#626262')
	})
})
$('.left_bar li:nth-child(7)').click(function(){
			$("body,html").stop().animate({
			scrollTop:4420
		}, 800);
		})
$('.left_bar li:nth-child(8)').hover(function(){
	$(this).css('background-color','#000').mouseleave(function(){
		$(this).css('background-color','#626262');
		
	})
})
$('.left_bar li:nth-child(8)').click(function(){
			$("body,html").stop().animate({
			scrollTop:4991
		}, 800);
		})
$('.left_bar li:nth-child(9)').hover(function(){
	$(this).css('background-color','#000').mouseleave(function(){
		$(this).css('background-color','#626262');
		
	})
})
$('.left_bar li:nth-child(9)').click(function(){
			$("body,html").stop().animate({
			scrollTop:5805
		}, 800);
		})


$('.left_bar li:nth-child(10),.right_bar .top_pic').click(function(){
$("body,html").stop().animate({
			scrollTop:0
		}, 800);	
})
})
// $(function(){
// 	alert($(document).scrollTop() );
// })
// $(function(){
//  	alert($('.menu_line .cat_2').index() );
//  })
$(function(){
	$('.menu_line .cat_1').mouseover(function(){
		$('.cat .cat_1').fadeIn(500);
	}).mouseleave(function(){
		$('.cat .cat_1').fadeOut(500);
	})
	$('.menu_line .cat_2').mouseover(function(){
		$('.cat .cat_2').fadeIn(500);
	}).mouseleave(function(){
		$('.cat .cat_2').fadeOut(500);
	})
	$('.menu_line .cat_3').mouseover(function(){
		$('.cat .cat_3').fadeIn(500);
	}).mouseleave(function(){
		$('.cat .cat_3').fadeOut(500);
	})
	$('.menu_line .cat_4').mouseover(function(){
		$('.cat .cat_4').fadeIn(500);
	}).mouseleave(function(){
		$('.cat .cat_4').fadeOut(500);
	})
	$('.menu_line .cat_5').mouseover(function(){
		$('.cat .cat_5').fadeIn(500);
	}).mouseleave(function(){
		$('.cat .cat_5').fadeOut(500);
	})
	$('.menu_line .cat_6').mouseover(function(){
		$('.cat .cat_6').fadeIn(500);
	}).mouseleave(function(){
		$('.cat .cat_6').fadeOut(500);
	})
	$('.menu_line .cat_7').mouseover(function(){
		$('.cat .cat_7').fadeIn(500);
	}).mouseleave(function(){
		$('.cat .cat_7').fadeOut(500);
	})
	$('.menu_line .cat_8').mouseover(function(){
		$('.cat .cat_8').fadeIn(500);
	}).mouseleave(function(){
		$('.cat .cat_8').fadeOut(500);
	})
	$('.menu_line .cat_9').mouseover(function(){
		$('.cat .cat_9').fadeIn(500);
	}).mouseleave(function(){
		$('.cat .cat_9').fadeOut(500);
	})
	$('.menu_line .cat_10').mouseover(function(){
		$('.cat .cat_10').fadeIn(500);
	}).mouseleave(function(){
		$('.cat .cat_10').fadeOut(500);
	})
	$('.menu_line .cat_11').mouseover(function(){
		$('.cat .cat_11').fadeIn(500);
	}).mouseleave(function(){
		$('.cat .cat_11').fadeOut(500);
	})
})