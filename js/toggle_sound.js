$(document).ready(function(){

	$('.button_sound').click(function(e){
		$("body").remove('<embed src="../audios/shinyding.mp3" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');
	 	//$('body').muted=true;
	 	//$('body')[0].play();
	 	e.preventDefault();
});
});


