
$(document).on("ready", function(){
$('body');
  var questions = [
  /* JSON list of Q and A */
	{"text": "Q.1. Which species name translates as blue-green algae?", "answers": ["Cyanobacteria", "Coelacanth", "Gingko Biloba", "Nautilus"], "correct": "Cyanobacteria" },

	{"text": "Q.2. Which species are hard to fossilize, as they're made of mostly water?", "answers": ["Jellyfish", "Horseshoe Crab", "Gingko Biloba", "Horseshoe Shrimp"], "correct": "Jellyfish" },

	{"text": "Q.3. Which species are from an ancient animal group whose lineage can be traced back to the beginnings of animal life?", "answers": ["Sponges", "Gingko Biloba", 
	"Horseshoe Crab", "Nautilus"], "correct": "Sponges" },

	{"text": "Q.4. Which species has fossils found that are dating back 4.5 billion years?", "answers": ["Cyanobacteria", "Gingko Biloba", 
	"Sponges", "Nautilus"], "correct": "Cyanobacteria" },

	{"text": "Q.5. Which species is a rare order of fish, more closely related to lungfish, reptiles and even mammals than to common ray-finned fish?", "answers": ["Jellyfish", "Gingko Biloba", 
	"Coelacanth", "Horseshoe Shrimp"], "correct": "Coelacanth" },

	{"text": "Q.6. Which tree can be dated back to 270 million years ago in the Permian period?", "answers": ["Nautilus", "Cyanobacteria", 
	"Gingko Biloba", "Coelacanth"], "correct": "Gingko Biloba" },

	{"text": "Q.7. What species name means 'sailor' in Greek?", "answers": ["Coelacanth", "Nautilus", 
	"Jellyfish", "Sponges"], "correct": "Nautilus" },

	{"text": "Q.8. Which living species has existed unchanged for 200 million years?", "answers": ["Horseshoe Shrimp", "Jellyfish", 
	"Cyanobacteria", "Nautilus"], "correct": "Horseshoe Shrimp" }

  ];

	var score = 0
	var slide = ["../images/tick.png"]
	var sound = ["../audios/shinyding.mp3"]
	
	var display_question = (function () {
		var question = questions[score];
		
		$("#question").text(question.text);
		$("#answer").empty();
		for( var i in question.answers) {

			var answer = question.answers[i]
			$("#answer").append("<li>" + answer + "</li>");
		}

		$("#answer li").on("click", validate_answer);
		
		//this from: source= http://codereview.stackexchange.com/questions/11948/randomize-a-jquery-object-list to enable random mix of answers
		for (var $x=$("#answer li"), i=$x.length-1, j, temp; i>=0; i--) { j=Math.floor(Math.random()*(i+1)), temp=$x[i], $x[i]=$x[j], $x[j]=temp; }
		$x.each(function(i, li) { $("#answer").append(li);
		});
		
	});
	
	

	var validate_answer = (function () {
	/* if the answer is correct the score increases */
		if ($(this).text() == questions[score].correct) {
			score++;
	
		$('#slides_' + score).slideDown(700);
		$('body').append('<embed src="../audios/shinyding.mp3" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');
            //$('#ticks').fadeIn(500);
			
			if (questions.length > score) {
				display_question();
				countdown = max_countdown;
			} else {
			
				$("#question").text("Well Done! You have completed the Oldest Living Species Quiz");
				$('#next_button').show();
				$('#slides');
				$("#answer").empty();
				// the countdown ends
				clearInterval(countdown_interval);
			}	
		} else {
		// for the wrong answer it suggests to "try again" 
		  display_error();
		}
				display_score();
	});
	
	var display_error = (function() {
	
		display_question();
		
		$("#answer").fadeOut(500);
		$("#try").fadeIn(100).fadeOut(2000);

		  $("#answer").fadeIn(200);
		  // the countdown decreases here
		  countdown --;
	});
	
	var display_score = (function (){ 
			$(".Arial_Rd_DkGreen_40").text(score * 100);			
	});
	
	var max_countdown = 60;
	var countdown = max_countdown;
	var display_countdown = (function() {
		$("#countdown").text(countdown);
	});
	
	//if the time is done can retry the quiz
	var game_end = (function()  {
		$("#try").fadeIn(100);

		  countdown --;
	});
	
	// if the countdown is 0 the questions are cleared
	var countdown_interval = setInterval(function() {
			display_countdown();
			countdown--;
			if(countdown < 0){
			$("#answer").empty();
			$("#question").text("out of time");
			clearInterval(countdown_interval);
			game_end();
			}
			}, 1000);
	
	display_question();
	display_score();

});
