/* some of this code is built upon a previous project I worked on in NCI. see bibliography */
$(document).on("ready", function(){
$('body');
  var questions = [
  
	{"text": "Q.1. Which is the city most active on Twitter?", "answers": ["Jakarta", "London", "New York", "Seoul"], "correct": "Jakarta" },

	{"text": "Q.2. Where are most buildings without a fourth floor as 4 is considered unlucky?", "answers": ["Seoul", "Mumbai", "Shanghai", "Delhi"], "correct": "Seoul" },

	{"text": "Q.3. Which city has more restaurants and teahouses than any other city in China?", "answers": ["Canton", "Shanghai", 
	"Beijing", "Hong Kong"], "correct": "Canton" },

	{"text": "Q.4. Which city has the most Michelin starred restaurants worldwide?", "answers": ["Tokyo", "New York", 
	"Paris", "London"], "correct": "Tokyo" },

	{"text": "Q.5. Which city was destroyed and rebuilt seven times?", "answers": ["Delhi", "Tokyo", 
	"Jakarta", "Mumbai"], "correct": "Delhi" },

	{"text": "Q.6. Where does the high court system have a waiting list of 20 years?", "answers": ["Mumbai", "London", 
	"Shanghai", "Delhi"], "correct": "Mumbai" },

	{"text": "Q.7. Where would you find the largest Chinese population of any city outside of Asia?", "answers": ["New York", "London", 
	"Paris", "San Francisco"], "correct": "New York" },

	{"text": "Q.8. Which city name translates literally as 'Above the Sea'?", "answers": ["Shanghai", "San Francisco", 
	"Mumbai", "Tokyo"], "correct": "Shanghai" }

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
		$('body').append('<embed src="audios/shinyding.mp3" autostart="true" width="1" height="1" id="LegacySound" enablejavascript="true">');
            //$('#ticks').fadeIn(500);
			
			if (questions.length > score) {
				display_question();
				countdown = max_countdown;
			} else {
			
				$("#question").text("Well Done! You have completed the Most Populated Cities Quiz");
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
