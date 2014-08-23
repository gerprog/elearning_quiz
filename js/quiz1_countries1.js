
$(document).on("ready", function(){
$('body');
  var questions = [
  
  {"text": "Q.1. What is the most visited country in the world?", "answers": ["France", "China", "U.S.A.", "Spain"], "correct": "France" },

  {"text": "Q.2. Which country surpassed Italy and Spain in 2013 for third place?", "answers": ["China", "U.S.A.", "Turkey", "Germany"], "correct": "China" },

  {"text": "Q.3. Where would you find the Musée du Louvre?", "answers": ["France", "Italy", 
  "Germany", "Spain"], "correct": "France" },

  {"text": "Q.4. What country covers an area of 3.79 million square miles?", "answers": ["U.S.A.", "China", 
  "Germany", "Turkey"], "correct": "U.S.A." },

  {"text": "Q.5. What country's coastlines are often flooded with German, British, and Dutch tourists?", "answers": ["France", "Spain", 
  "China", "Italy"], "correct": "Spain" },

  {"text": "Q.6. What country comes in at number one on UNWTO’s ranking of world tourism expenditure?", "answers": ["Spain", "U.S.A.", 
  "Turkey", "Germany"], "correct": "Germany" },

  {"text": "Q.7. Which country spans across Europe and Asia?", "answers": ["Turkey", "China", 
  "Spain", "Italy"], "correct": "Turkey" },

  {"text": "Q.8. Where would you find the beaches of the Amalfi coast?", "answers": ["Italy", "U.K.", 
  "Spain", "France"], "correct": "Italy" }

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
      
        $("#question").text("Well Done! You have completed the Most Visited Countries Quiz");
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
