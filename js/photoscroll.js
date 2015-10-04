$(function(){
	var moveInterval = 1;
	var slideTime = 1;

	$('#loopslider').each(function(){
		var loopsliderWidth = $(this).width();
		var loopsliderHeight = $(this).height();
		$(this).children('ul').wrapAll('<div id="loopslider_wrap"></div>');

		var listWidth = $('#loopslider_wrap').children('ul').children('li').width();
		var listCount = $('#loopslider_wrap').children('ul').children('li').length;

		var loopWidth = (listWidth)*(listCount);

		$('#loopslider_wrap').css({
			top: '0',
			left: '0',
			width: ((loopWidth) * 2),
			height: (loopsliderHeight),
			overflow: 'hidden',
			position: 'absolute'
		});

		$('#loopslider_wrap ul').css({
			width: (loopWidth)
		});
		$('#loopslider_wrap ul').clone().appendTo('#loopslider_wrap');

		timerLeft();

		function timerLeft(){
			setTimer = setInterval(function(){loopPositionLeft()},0);
		};

		function loopPositionLeft(){
			clearInterval(setTimer);
			$('#loopslider_wrap').stop().animate({left:'-=' + (moveInterval) + 'px'},slideTime,'linear',function(){
				var posLeft = parseInt($('#loopslider_wrap').css('left'));
				var widthCal = (loopWidth)-((loopWidth)*2);
				if (posLeft === widthCal) {
					$('#loopslider_wrap').css({left:'0'});
				}
				timerLeft();

				$(this).hover(function(){
					$('#loopslider_wrap').stop();
					clearInterval(setTimer);
				},function(){
					loopPositionLeft();
				});

			});

		};


		$('#loopright').hover(function(){
			$('#loopslider_wrap').stop();
			clearInterval(setTimer);
			timerRight();
		});

		function timerRight(){
			setTimer = setInterval(function(){loopPositionRight()},0);
		};

		function loopPositionRight(){
			clearInterval(setTimer);
			$('#loopslider_wrap').stop().animate({left:'+=' + (moveInterval) + 'px'},slideTime,'linear',function(){
				var posLeft = parseInt($('#loopslider_wrap').css('left'));
				var widthCal = (loopWidth)-((loopWidth)*2);
				if (posLeft === 0) {
					$('#loopslider_wrap').css({left:(-(loopWidth))});
				}
				timerRight();

				$(this).hover(function(){
					$('#loopslider_wrap').stop();
					clearInterval(setTimer);
				},function(){
					loopPositionRight();
				});
			});

		};

		$('#loopleft').hover(function(){
			$('#loopslider_wrap').stop();
			clearInterval(setTimer);
			timerLeft();
		});


	});
});