$(document).ready(function(){

	$('.button_css').click(function(e){
	 	$('.quiz_container, .quiz_container_blue, .quiz_container_green, .quiz_container_yellow, .bigrow_species, .bigrow_space, .bigrow_cities').toggleClass('bigrow_bw');
	 	$('.bigrow_countries').toggleClass('bigrow_bw');
	 	$('.textzone_species, .textzone_space, .textzone_countries, .textzone_cities').toggleClass('textzone_bw');
	 	$('.dragzone_species, .dragzone_countries, .dragzone_cities').toggleClass('dragzone_bw');
	 	$('.dragzone_space').toggleClass('dragzone_blk');
	 	$('.species_facts, .solar_facts, .country_facts, .cities_facts').toggleClass('facts_font_bw');
	 	$('.body_class_white').toggleClass('body_class_blk');
	 	$('.note').toggleClass('note_bw');
	 	e.preventDefault();
});
});