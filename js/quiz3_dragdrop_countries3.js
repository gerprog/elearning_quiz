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
			$("body");
			
			score++;
			display_score();
			bonus_display();
		}		
	};
	
	/*will revert the piece of the puzzle to it's origin if not placed in the correct position */
	$( ".france, .france_fact, .america, .america_fact, .china, .china_fact, .spain, .spain_fact, .italy, .italy_fact, .uk, .uk_fact, .turkey, .turkey_fact, .germany, .germany_fact" ).draggable({revert: 'invalid'});
		
	$(".row1a").droppable($.extend({ accept: '.france'}, droppable_option));
	$(".row1b").droppable($.extend({ accept: '.france_fact'}, droppable_option));
	$(".row2a").droppable($.extend({ accept: '.america'}, droppable_option));
	$(".row2b").droppable($.extend({ accept: '.america_fact'}, droppable_option));
	$(".row3a").droppable($.extend({ accept: '.china'}, droppable_option));
	$(".row3b").droppable($.extend({ accept: '.china_fact'}, droppable_option));
	$(".row4a").droppable($.extend({ accept: '.spain'}, droppable_option));
	$(".row4b").droppable($.extend({ accept: '.spain_fact'}, droppable_option));
	$(".row5a").droppable($.extend({ accept: '.italy'}, droppable_option));
	$(".row5b").droppable($.extend({ accept: '.italy_fact'}, droppable_option));
	$(".row6a").droppable($.extend({ accept: '.uk'}, droppable_option));
	$(".row6b").droppable($.extend({ accept: '.uk_fact'}, droppable_option));
	$(".row7a").droppable($.extend({ accept: '.turkey'}, droppable_option));
	$(".row7b").droppable($.extend({ accept: '.turkey_fact'}, droppable_option));
	$(".row8a").droppable($.extend({ accept: '.germany'}, droppable_option));
	$(".row8b").droppable($.extend({ accept: '.germany_fact'}, droppable_option));
	

		
	var display_score = (function (){ 
		$(".text_blk_22a").text(0 + score * 100);		
	});
	
	
		
	display_score();		
});
