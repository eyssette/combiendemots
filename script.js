let words = document.getElementById("words");
let characters = document.getElementById("characters");
let sentences = document.getElementById("sentences");
let readingTime = document.getElementById("reading-time");
let handwritingTime = document.getElementById("handwriting-time");
let speakingTime = document.getElementById("speaking-time");

let input = document.getElementById("champ-texte");
input.oninput = handleInput;

function handleInput(e) {
	let texte = input.value;
	let wordsCounter = texte.split(' ').length;
	let charactersCounter = texte.length;
	let sentencesCounter = texte.split('.').length;
	let readingTimeCounter = (wordsCounter/250)*60;
	let handwritingTimeCounter1 = (wordsCounter/15)*60;
	let handwritingTimeCounter2 = (charactersCounter/120)*60;
	let handwritingTimeCounterMin = Math.min(handwritingTimeCounter1,handwritingTimeCounter2);
	let handwritingTimeCounterMax = Math.max(handwritingTimeCounter1,handwritingTimeCounter2);
	let speakingTimeCounter = (wordsCounter/150)*60; ;

	words.innerHTML = wordsCounter;
	characters.innerHTML = charactersCounter;
	sentences.innerHTML = sentencesCounter;
	readingTime.innerHTML = tempsEnMinutes(readingTimeCounter); 
	handwritingTime.innerHTML = 'entre '+tempsEnMinutes(handwritingTimeCounterMin) + ' et ' +tempsEnMinutes(handwritingTimeCounterMax) ; 
	speakingTime.innerHTML = tempsEnMinutes(speakingTimeCounter); 
}

function tempsEnMinutes(time) {
let minutes = Math.floor(time / 60);
let seconds = time - minutes * 60;
let temps = 0;
if (seconds == 0) {
	temps = minutes+" m";
} else if (time < 60) {
	temps = Math.round(time)+" s";
} else {
	temps = minutes+" m "+Math.round(seconds)+" s";
}
return temps;
}
