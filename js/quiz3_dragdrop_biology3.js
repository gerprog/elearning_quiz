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
	$( ".cyanobacteria, .cyanobacteria_fact, .sponge, .sponge_fact, .jellyfish, .jellyfish_fact, .horseshoe_crab, .horseshoe_crab_fact, .coelacanth, .coelacanth_fact, .gingko_biloba, .gingko_biloba_fact, .nautilus, .nautilus_fact, .horseshoe_shrimp, .horseshoe_shrimp_fact" ).draggable({revert: 'invalid'});
		
	$(".row1a").droppable($.extend({ accept: '.cyanobacteria'}, droppable_option));
	$(".row1b").droppable($.extend({ accept: '.cyanobacteria_fact'}, droppable_option));
	$(".row2a").droppable($.extend({ accept: '.sponge'}, droppable_option));
	$(".row2b").droppable($.extend({ accept: '.sponge_fact'}, droppable_option));
	$(".row3a").droppable($.extend({ accept: '.jellyfish'}, droppable_option));
	$(".row3b").droppable($.extend({ accept: '.jellyfish_fact'}, droppable_option));
	$(".row4a").droppable($.extend({ accept: '.horseshoe_crab'}, droppable_option));
	$(".row4b").droppable($.extend({ accept: '.horseshoe_crab_fact'}, droppable_option));
	$(".row5a").droppable($.extend({ accept: '.coelacanth'}, droppable_option));
	$(".row5b").droppable($.extend({ accept: '.coelacanth_fact'}, droppable_option));
	$(".row6a").droppable($.extend({ accept: '.gingko_biloba'}, droppable_option));
	$(".row6b").droppable($.extend({ accept: '.gingko_biloba_fact'}, droppable_option));
	$(".row7a").droppable($.extend({ accept: '.nautilus'}, droppable_option));
	$(".row7b").droppable($.extend({ accept: '.nautilus_fact'}, droppable_option));
	$(".row8a").droppable($.extend({ accept: '.horseshoe_shrimp'}, droppable_option));
	$(".row8b").droppable($.extend({ accept: '.horseshoe_shrimp_fact'}, droppable_option));
	

		
	var display_score = (function (){ 
		$(".text_blk_22a").text(0 + score * 100);		
	});
	
	
		
	display_score();		
});
