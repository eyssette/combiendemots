let words = document.getElementById("words");
let characters = document.getElementById("characters");
let lettersAndNumbers = document.getElementById("letters-and-numbers");
let sentences = document.getElementById("sentences");
let readingTime = document.getElementById("reading-time");
let handwritingTime = document.getElementById("handwriting-time");
let speakingTime = document.getElementById("speaking-time");
let numberOfLongWords = document.getElementById("number-long-words");
let averageWordLength = document.getElementById("average-word-length");
let averageSentenceLength = document.getElementById("average-sentence-length");

let input = document.getElementById("champ-texte");
input.oninput = handleInput;

function handleInput(e) {
	let text = input.value.trim();
	let regex1 = /[^a-zA-Z\d\s\u00C0-\u00FF]/g;
	let regex2 = /[\s+]/g;
	let textClean = text.replace(regex1, '').replace(':', '').trim();
	let textCleanNoWhiteSpace = textClean.replace(regex2,'');
	let wordsList = textClean.split(/\s+/).filter(function (el) {
		return el != '';
	  });
	let wordsCounter = wordsList.length;
	let charactersCounter = text.length;
	let lettersAndNumbersCounter = textCleanNoWhiteSpace.length;
	let sentencesClean = text.split('.').filter(function (el) {
		return el != '';
	  });
	let sentencesCounter = sentencesClean.length;
	if (wordsList >0 && sentencesCounter == 0){sentencesCounter=1};
	let readingTimeCounter = (wordsCounter/250)*60;
	let handwritingTimeCounter1 = (wordsCounter/15)*60;
	let handwritingTimeCounter2 = (charactersCounter/120)*60;
	let handwritingTimeCounterMin = Math.min(handwritingTimeCounter1,handwritingTimeCounter2);
	let handwritingTimeCounterMax = Math.max(handwritingTimeCounter1,handwritingTimeCounter2);
	let speakingTimeCounter = (wordsCounter/150)*60; ;
	let longWordsList = wordsList.filter(word => word.length > 7);
	let numberOfLongWordsCounter = longWordsList.length;
	let averageWordLengthCounter = charactersCounter/wordsCounter;
	let averageSentenceLengthCounter = wordsCounter/sentencesCounter;

	words.innerHTML = wordsCounter;
	characters.innerHTML = charactersCounter;
	lettersAndNumbers.innerHTML = lettersAndNumbersCounter;
	sentences.innerHTML = sentencesCounter;
	readingTime.innerHTML = tempsEnMinutesEtSecondes(readingTimeCounter); 
	handwritingTime.innerHTML = 'entre '+tempsEnMinutesEtSecondes(handwritingTimeCounterMin) + ' et ' +tempsEnMinutesEtSecondes(handwritingTimeCounterMax) ; 
	speakingTime.innerHTML = tempsEnMinutesEtSecondes(speakingTimeCounter); 
	numberOfLongWords.innerHTML = numberOfLongWordsCounter;
}

function tempsEnMinutesEtSecondes(time) {
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
