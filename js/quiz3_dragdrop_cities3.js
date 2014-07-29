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
	$( ".tokyo, .tokyo_fact, .canton, .canton_fact, .shanghai, .shanghai_fact, .jakarta, .jakarta_fact, .seoul, .seoul_fact, .delhi, .delhi_fact, .mumbai, .mumbai_fact, .newyork, .newyork_fact, .beijing, .beijing_fact, .losangeles, .losangeles_fact, .buenosaires, .buenosaires_fact, .london, .london_fact, .istanbul, .istanbul_fact" ).draggable({revert: 'invalid'});
		
	$(".row1a").droppable($.extend({ accept: '.tokyo'}, droppable_option));
	$(".row1b").droppable($.extend({ accept: '.tokyo_fact'}, droppable_option));
	$(".row2a").droppable($.extend({ accept: '.canton'}, droppable_option));
	$(".row2b").droppable($.extend({ accept: '.canton_fact'}, droppable_option));
	$(".row3a").droppable($.extend({ accept: '.shanghai'}, droppable_option));
	$(".row3b").droppable($.extend({ accept: '.shanghai_fact'}, droppable_option));
	$(".row4a").droppable($.extend({ accept: '.jakarta'}, droppable_option));
	$(".row4b").droppable($.extend({ accept: '.jakarta_fact'}, droppable_option));
	$(".row5a").droppable($.extend({ accept: '.seoul'}, droppable_option));
	$(".row5b").droppable($.extend({ accept: '.seoul_fact'}, droppable_option));
	$(".row6a").droppable($.extend({ accept: '.delhi'}, droppable_option));
	$(".row6b").droppable($.extend({ accept: '.delhi_fact'}, droppable_option));
	$(".row7a").droppable($.extend({ accept: '.mumbai'}, droppable_option));
	$(".row7b").droppable($.extend({ accept: '.mumbai_fact'}, droppable_option));
	$(".row8a").droppable($.extend({ accept: '.newyork'}, droppable_option));
	$(".row8b").droppable($.extend({ accept: '.newyork_fact'}, droppable_option));
	$(".row9a").droppable($.extend({ accept: '.beijing'}, droppable_option));
	$(".row9b").droppable($.extend({ accept: '.beijing_fact'}, droppable_option));
	$(".row10a").droppable($.extend({ accept: '.losangeles'}, droppable_option));
	$(".row10b").droppable($.extend({ accept: '.losangeles_fact'}, droppable_option));
	$(".row11a").droppable($.extend({ accept: '.buenosaires'}, droppable_option));
	$(".row11b").droppable($.extend({ accept: '.buenosaires_fact'}, droppable_option));
	$(".row12a").droppable($.extend({ accept: '.london'}, droppable_option));
	$(".row12b").droppable($.extend({ accept: '.london_fact'}, droppable_option));
	$(".row13a").droppable($.extend({ accept: '.istanbul'}, droppable_option));
	$(".row13b").droppable($.extend({ accept: '.istanbul_fact'}, droppable_option));

		
	var display_score = (function (){ 
		$(".text_blk_22a").text(0 + score * 100);		
	});
	
	
		
	display_score();		
});
