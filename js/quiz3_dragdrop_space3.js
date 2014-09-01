/* some of this code is built upon a previous project I worked on in NCI. see bibliography */
$(document).on("ready", function(){
	var score = 0
 
	$('body');
  
	var droppable_option = {
		activeClass: 'ui-state-hover',
		hoverClass: 'ui-state-active',
		drop: function(event, ui) {		
			ui.draggable.draggable("disable", 1)
		
			$(this).addClass('ui-state-highlight');
			$("body");
			
			score++;
			display_score();
			welldone_display();
		}		
	};
	
	
	$( ".mercury, .mercury_fact, .venus, .venus_fact, .earth, .earth_fact, .mars, .mars_fact, .jupiter, .jupiter_fact, .saturn, .saturn_fact, .uranus, .uranus_fact, .neptune, .neptune_fact" ).draggable({revert: 'invalid'});
		
	$(".row1a").droppable($.extend({ accept: '.mercury'}, droppable_option));
	$(".row1b").droppable($.extend({ accept: '.mercury_fact'}, droppable_option));
	$(".row2a").droppable($.extend({ accept: '.venus'}, droppable_option));
	$(".row2b").droppable($.extend({ accept: '.venus_fact'}, droppable_option));
	$(".row3a").droppable($.extend({ accept: '.earth'}, droppable_option));
	$(".row3b").droppable($.extend({ accept: '.earth_fact'}, droppable_option));
	$(".row4a").droppable($.extend({ accept: '.mars'}, droppable_option));
	$(".row4b").droppable($.extend({ accept: '.mars_fact'}, droppable_option));
	$(".row5a").droppable($.extend({ accept: '.jupiter'}, droppable_option));
	$(".row5b").droppable($.extend({ accept: '.jupiter_fact'}, droppable_option));
	$(".row6a").droppable($.extend({ accept: '.saturn'}, droppable_option));
	$(".row6b").droppable($.extend({ accept: '.saturn_fact'}, droppable_option));
	$(".row7a").droppable($.extend({ accept: '.uranus'}, droppable_option));
	$(".row7b").droppable($.extend({ accept: '.uranus_fact'}, droppable_option));
	$(".row8a").droppable($.extend({ accept: '.neptune'}, droppable_option));
	$(".row8b").droppable($.extend({ accept: '.neptune_fact'}, droppable_option));
	

		
	var display_score = (function (){ 
		$(".text_blk_22a").text(0 + score * 100);		
	});
	
	var welldone_display = (function() {
		
		if (score >= 16){
			$("#Q3_more_info").show("scale",{  percent: 100}, 1000 );
			/*$("#welldone_bio").effect("shake",{  times: 0}, 0000);
			$(".text_blk_22a").text(2000);*/
		}
		
	});
	
	display_score();		
});
