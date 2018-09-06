var $sliderb = $(".sliderb"), $bullets = $(".bullets");
		function calculateHeight(){
			var height = $(".slideb.active").outerHeight();
			$sliderb.height(height);
		}

		$(window).resize(function() {
			calculateHeight();
		    clearTimeout($.data(this, 'resizeTimer'));
		});
		
		function resetSlides(){
			$(".slideb.inactive").removeClass("inactiveRight").removeClass("inactiveLeft");
		}

		function gotoSlide($activeSlide, $slideb, className){
			 $activeSlide.removeClass("active").addClass("inactive "+className);
			 $slideb.removeClass("inactive").addClass("active");
			 calculateHeight();
			 resetBullets();
			 setTimeout(resetSlides, 300);
		}
		$(document).on("click", ".bullet", function(){
			if($(this).hasClass("active")){
				return;
			}
			var $activeSlide = $(".slideb.active");
			var currentIndex = $activeSlide.index();
			var targetIndex = $(this).index();
			console.log(currentIndex, targetIndex);
			var $theSlide = $(".slideb:nth-child("+(targetIndex+1)+")");
			gotoSlide($activeSlide, $theSlide, currentIndex > targetIndex ? "inactiveRight" : "inactiveLeft");
		})
		function addBullets(){
			var total = $(".slideb").length, index = $(".slideb.active").index();
			for (var i=0; i < total; i++){
				var $bullet = $("<div>").addClass("bullet");
				if(i==index){
					$bullet.addClass("active");	
				}
				$bullets.append($bullet);
			}
		}
		function resetBullets(){
			$(".bullet.active").removeClass("active");
			var index = $(".slideb.active").index()+1;
			console.log(index);
			$(".bullet:nth-child("+index+")").addClass("active");
		}
		addBullets();
		calculateHeight();
		
		/*******happy slider*******/
		
		