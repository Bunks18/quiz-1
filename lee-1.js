var state = {
	questions: [],
	score: 0,
	currentQuestionIndex: 0
}

function Question() {
	this.text = '';
	this.answerChoices = [];
	this.correctAnswer = '';
	this.isCurrentlyDisplayed = false;
}


var ques1 = new Question();
ques1.text = 'Whose best soccer player?';
ques1.answerChoices.push('Messi');
ques1.answerChoices.push('Ronaldo');
ques1.answerChoices.push('Bunkdinho');

ques1.correctAnswer = 'Messi';
ques1.isCurrentlyDisplayed = true;

var ques2 = new Question();
ques2.text = 'Whose best goal keeper?';
ques2.answerChoices.push('Cech');
ques2.answerChoices.push('Howard');
ques2.answerChoices.push('Bunkdinho');
ques2.correctAnswer = 'Cech';
ques2.isCurrentlyDisplayed = false;

var ques3 = new Question();
ques3.text = 'Whose best midfielder?';
ques3.answerChoices.push('Gerard');
ques3.answerChoices.push('Xabi');
ques3.answerChoices.push('Iniesta');
ques3.correctAnswer = 'Gerard';
ques3.isCurrentlyDisplayed = false;

var ques4 = new Question();
ques4.text = 'Whose the best striker?';
ques4.answerChoices.push('Messi');
ques4.answerChoices.push('Ronaldo');
ques4.answerChoices.push('Bunkdinho');
ques4.correctAnswer = 'Messi';
ques4.isCurrentlyDisplayed = false;

var ques5 = new Question();
ques5.text = 'Whose the best defender?';
ques5.answerChoices.push('Senderos');
ques5.answerChoices.push('Masche');
ques5.answerChoices.push('Canavaro');
ques5.correctAnswer = 'Canavaro';
ques5.isCurrentlyDisplayed = false;


state.questions.push(ques1);
state.questions.push(ques2);
state.questions.push(ques3);
state.questions.push(ques4);
state.questions.push(ques5);


var score = state.score;
var currentIndex = state.currentQuestionIndex;


function startQuiz(state, index){

	var currentQuestion = state.questions[state.currentQuestionIndex].text;

  var currentChoices = [];
	var currentChoices = state.questions[state.currentQuestionIndex].answerChoices;

		$('.question-text').html(currentQuestion);

		$("#choice-1").val(currentChoices[0]);
		$("#choice-2").val(currentChoices[1]);
		$("#choice-3").val(currentChoices[2]);

		// inject array values into the span text
		$("#choice-1-text").text(currentChoices[0]);
		$("#choice-2-text").text(currentChoices[1]);
		$("#choice-3-text").text(currentChoices[2]);
}

function nextQuestion(state){
	state.currentQuestionIndex++

	// if(state.currentQuestionIndex === 0){
	// 	state.currentQuestionIndex === 0;
	// }
	// else {
  // state.currentQuestionIndex++;
	// }
	// else {
	// 	state.currentQuestionIndex++
	// }
	//takes the state and the current index
	//get the question

	var currentQuestion = state.questions[state.currentQuestionIndex].text;
	// get the question answerChoices
  var currentChoices = [];
	var currentChoices = state.questions[state.currentQuestionIndex].answerChoices;

	// render question in Span
		$('.question-text').html(currentQuestion);

// assign the array values to the choice values
		$("#choice-1").val(currentChoices[0]);
		$("#choice-2").val(currentChoices[1]);
		$("#choice-3").val(currentChoices[2]);

		// inject array values into the span text
		$("#choice-1-text").text(currentChoices[0]);
		$("#choice-2-text").text(currentChoices[1]);
		$("#choice-3-text").text(currentChoices[2]);
}



function validateAnswer(state){
		//get the answer for the question that was selected
    questionAnswer = $('input[name=choices]:checked').val();
    console.log(questionAnswer);

		var answer = state.questions[state.currentQuestionIndex].correctAnswer;
		// if true state.score++
		console.log(answer);

		if( questionAnswer === answer){
			score = score + 1;
			$('.message').text("The Correct Answer is "+ answer + " ,You Got it Right" );
		}
		else {
			score = score;
			$('.message').text("The Correct Answer is " + answer + " ,You Suck Amelia");
		}
		console.log(score);
		$('.message')

		if( state.currentQuestionIndex === 4){
			$('.next').hide();
			$('.seeResults').show();
		}
}


function Results(){
	$('.answer').text("You got " + score + " 	Out of 5 Questions")
}

function Reset(){
	score = 0;
	state.currentQuestionIndex = 0;
}


$(document).ready(function(){
	console.log(state);

	$('#start1').click(function(event){
		$(".questions").show();
		$('.formBox').hide();
		// nextQuestion(state,state.currentQuestionIndex);
		startQuiz(state);
	})

// listen for the next button
$('.next').click(function(event){
  $('.questions').show();
	$('.results').hide();
	nextQuestion(state);
})

// listen for input selection
$('.submit').click(function(event){
	validateAnswer(state);
	$('.questions').hide();
	$('.results').show();
	console.log(state.currentQuestionIndex);
})

//listen for when its time to show results
$('.seeResults').click(function(event){
	Results();
	$('.message').hide();
	$('.seeResults').hide();
	$('.reset').show();
})

$('.reset').click(function(event){
   Reset();
	$('.formBox').show();
	$('.results').hide();
	$('#start1').show();
	console.log(score);
});


});
