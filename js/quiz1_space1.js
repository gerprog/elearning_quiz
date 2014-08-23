
$(document).on("ready", function(){
$('body');
  var questions = [
  
	{"text": "Q.1. How old is the Sun?", "answers": ["40 Billion years old", "4.5 Billion years old", "10 Billion years old", "No one knows"], "correct": "4.5 Billion years old" },

	{"text": "Q.2. What is the planet nearest the Sun?", "answers": ["Mercury", "Venus", "Uranus", "Mars"], "correct": "Mercury" },

	{"text": "Q.3. What is the planet furthest from the Sun?", "answers": ["Uranus", "Neptune", 
	"Venus", "Jupiter"], "correct": "Neptune" },

	{"text": "Q.4. In what year will the next transit of Mercury passing the face of the Sun be visible?", "answers": ["2050", "2022", 
	"2015", "2016"], "correct": "2016" },

	{"text": "Q.5. Which planet's name comes from the anglo-saxon word for soil?", "answers": ["Earth", "Saturn", 
	"Mars", "Venus"], "correct": "Earth" },

	{"text": "Q.6. Which planet is 2.5 times more massive than all the other planets in the solar system combined?", "answers": ["Jupiter", "Saturn", 
	"Neptune", "Uranus"], "correct": "Jupiter" },

	{"text": "Q.7. Which planet is the most distant that can be seen with the naked eye?", "answers": ["Jupiter", "Saturn", 
	"Neptune", "Uranus"], "correct": "Saturn" },

	{"text": "Q.8. Which was the first planet discovered with the use of a telescope?", "answers": ["Jupiter", "Earth", 
	"Neptune", "Uranus"], "correct": "Uranus" },

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
		
		//source= http://codereview.stackexchange.com/questions/11948/randomize-a-jquery-object-list for random answer
		for (var $x=$("#answer li"), i=$x.length-1, j, temp; i>=0; i--) { j=Math.floor(Math.random()*(i+1)), temp=$x[i], $x[i]=$x[j], $x[j]=temp; }
		$x.each(function(i, li) { $("#answer").append(li);
		});
		
	});
	
	

	var validate_answer = (function () {
	
		if ($(this).text() == questions[score].correct) {
			score++;
	
		$('#slides_' + score).slideDown(700);
		$('body').append('<embed src="../audios/shinyding.mp3" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');
            //$('#ticks').fadeIn(500);
			
			if (questions.length > score) {
				display_question();
				countdown = max_countdown;
			} else {
			
				$("#question").text("Well Done! You have completed the Solar System Quiz");
				$('#next_button').show();
				$('#slides');
				$("#answer").empty();
				
				clearInterval(countdown_interval);
			}	
		} else {
		
		  display_error();
		}
				display_score();
	});
	
	var display_error = (function() {
	
		display_question();
		
		$("#answer").fadeOut(500);
		$("#try").fadeIn(100).fadeOut(2000);

		  $("#answer").fadeIn(200);
		  
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
	
	
	var game_end = (function()  {
		$("#try").fadeIn(100);

		  countdown --;
	});
	
	
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
