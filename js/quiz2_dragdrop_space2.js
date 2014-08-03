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
			$("body").append('<embed src="../audios/shinyding.mp3" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');
			
			score++;
			display_score();
			welldone_display();
		}		
	};
	
	/*will revert the piece of the puzzle to it's origin if not placed in the correct position */
	$( ".earth, .jupiter, .mars, .venus, .neptune, .mercury, .saturn, .uranus" ).draggable({revert: 'invalid'});
		
	$(".bigrow1_space").droppable($.extend({ accept: '.mercury'}, droppable_option));
	$(".bigrow2_space").droppable($.extend({ accept: '.venus'}, droppable_option));
	$(".bigrow3_space").droppable($.extend({ accept: '.earth'}, droppable_option));

	$(".bigrow4_space").droppable($.extend({ accept: '.mars'}, droppable_option));
	$(".bigrow5_space").droppable($.extend({ accept: '.jupiter'}, droppable_option));
	$(".bigrow6_space").droppable($.extend({ accept: '.saturn'}, droppable_option));

	$(".bigrow7_space").droppable($.extend({ accept: '.uranus'}, droppable_option));
	$(".bigrow8_space").droppable($.extend({ accept: '.neptune'}, droppable_option));
		
	
	
	var welldone_display = (function() {
		
		if (score >= 1){
			$("#welldone_space").show("scale",{  percent: 100}, 1000 );
			/*$("#welldone_bio").effect("shake",{  times: 0}, 0000);
			$(".text_blk_22a").text(2000);*/
			Sticker.init(".sticker");
		}

		
	});

	var display_score = (function (){ 
		$(".Arial_Rd_Blue_30").text(0 + score * 100);		
	});
		
	display_score();		
});
