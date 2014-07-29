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
			welldone_display();
		}		
	};
	
	/*will revert the piece of the puzzle to it's origin if not placed in the correct position */
	$( ".cyanobacteria, .sponge, .jellyfish, .horseshoe_crab, .coelacanth, .gingko_biloba, .nautilus, .horseshoe_shrimp" ).draggable({revert: 'invalid'});
		
	$(".bigrow1_bio").droppable($.extend({ accept: '.cyanobacteria'}, droppable_option));
	$(".bigrow2_bio").droppable($.extend({ accept: '.sponge'}, droppable_option));
	$(".bigrow3_bio").droppable($.extend({ accept: '.jellyfish'}, droppable_option));

	$(".bigrow4_bio").droppable($.extend({ accept: '.horseshoe_crab'}, droppable_option));
	$(".bigrow5_bio").droppable($.extend({ accept: '.coelacanth'}, droppable_option));
	$(".bigrow6_bio").droppable($.extend({ accept: '.gingko_biloba'}, droppable_option));

	$(".bigrow7_bio").droppable($.extend({ accept: '.nautilus'}, droppable_option));
	$(".bigrow8_bio").droppable($.extend({ accept: '.horseshoe_shrimp'}, droppable_option));
		
	var display_score = (function (){ 
		$(".text_blk_22a").text(0 + score * 100);		
	});
	
	/*displays bonus round when score reaches 2000*/
	var welldone_display = (function() {
		
		if (score >= 8){
			$("#welldone_species").show("scale",{  percent: 100}, 1000 );
			/*$("#welldone_bio").effect("shake",{  times: 0}, 0000);
			$(".text_blk_22a").text(2000);*/
		}
		
	});
	
		
	display_score();		
});
