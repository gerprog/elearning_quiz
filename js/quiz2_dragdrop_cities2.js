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
			//$(this);
			$("body").append('<embed src="shinyding.mp3" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');
			
			score++;
			display_score();
			//bonus_display();
		}		
	};
	
	/*will revert the piece of the puzzle to it's origin if not placed in the correct position */
	$( ".tokyo, .canton, .shanghai, .jakarta, .seoul, .delhi, .mumbai, .new_york" ).draggable({revert: 'invalid'});
		
	$(".bigrow1_cities").droppable($.extend({ accept: '.tokyo'}, droppable_option));
	$(".bigrow2_cities").droppable($.extend({ accept: '.canton'}, droppable_option));
	$(".bigrow3_cities").droppable($.extend({ accept: '.shanghai'}, droppable_option));

	$(".bigrow4_cities").droppable($.extend({ accept: '.jakarta'}, droppable_option));
	$(".bigrow5_cities").droppable($.extend({ accept: '.seoul'}, droppable_option));
	$(".bigrow6_cities").droppable($.extend({ accept: '.delhi'}, droppable_option));

	$(".bigrow7_cities").droppable($.extend({ accept: '.mumbai'}, droppable_option));
	$(".bigrow8_cities").droppable($.extend({ accept: '.new_york'}, droppable_option));
		
	var display_score = (function (){ 
		$(".text_blk_22a").text(0 + score * 100);		
	});
	
	
		
	display_score();		
});
