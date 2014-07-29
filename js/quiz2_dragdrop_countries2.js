$(document).on("ready", function(){
	var score = 0
 
	$('body');
  /*function to allow only a specific piece of the puzzle to drop in the required div*/
	var droppable_option = {
		activeClass: 'ui-state-hover',
		hoverClass: 'ui-state-active',
		drop: function(event, ui) {		
			ui.draggable.draggable("disable", 1)
		
			$(this).addClass('ui-state-highlight');
			$("body").append('<embed src="shinyding.mp3" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');
			
			score++;
			display_score();
			bonus_display();
		}		
	};
	
	/*will revert the piece of the puzzle to it's origin if not placed in the correct position */
	$( ".france, .america, .china, .spain, .italy, .uk, .turkey, .germany" ).draggable({revert: 'invalid'});
		
	$(".bigrow1_countries").droppable($.extend({ accept: '.france'}, droppable_option));
	$(".bigrow2_countries").droppable($.extend({ accept: '.america'}, droppable_option));
	$(".bigrow3_countries").droppable($.extend({ accept: '.china'}, droppable_option));

	$(".bigrow4_countries").droppable($.extend({ accept: '.spain'}, droppable_option));
	$(".bigrow5_countries").droppable($.extend({ accept: '.italy'}, droppable_option));
	$(".bigrow6_countries").droppable($.extend({ accept: '.uk'}, droppable_option));

	$(".bigrow7_countries").droppable($.extend({ accept: '.turkey'}, droppable_option));
	$(".bigrow8_countries").droppable($.extend({ accept: '.germany'}, droppable_option));
		
	var display_score = (function (){ 
		$(".text_blk_22a").text(0 + score * 100);		
	});
	
	
		
	display_score();		
});
