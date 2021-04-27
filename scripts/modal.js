jQuery(function($) {
	// Ключ localStorage
	var LS_KEY = 'modal_shown';
	// Если модал еще не открыали
	$(document).mouseleave(function(e){

		if (!localStorage.getItem(LS_KEY)) {
		console.log(localStorage.getItem(LS_KEY));
			if (e.clientY < 10) {
				$(".popup-fade").fadeIn("fast");
			}    
		}

		$('.popup-close').click(function() {
			$(this).parents('.popup-fade').fadeOut();
			return false;
		});		
		
		$(document).keydown(function(e) {
			if (e.keyCode === 27) {
				e.stopPropagation();
				$('.popup-fade').fadeOut();
			}
		});
		
		$('.popup-fade').click(function(e) {
			if ($(e.target).closest('.popup').length == 0) {
				$(this).fadeOut();					
			}
		});
		// Сохраняем флаг в localStorage
		localStorage.setItem(LS_KEY, '1');
	  })
	})



	var delay_popup = 12000;
	setTimeout("document.getElementById('parent_popup').style.display='block'", delay_popup);
	$('.popup-close1').click(function() {
	  $(this).parents('.popup-fade1').fadeOut();
	  return false;
	});		
	
	$(document).keydown(function(e) {
	  if (e.keyCode === 27) {
		e.stopPropagation();
		$('.popup-fade1').fadeOut();
	  }
	});
