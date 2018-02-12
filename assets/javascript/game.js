//Global Variable
//===================================================
// Array of Words
const name = ['flowey', 'toriel', 'sans', 'papyrus', 'undyne']
//choose word randomly
var randNum = Math.floor(Math.random()*name.length);
var chosenName = name[randNum];
var rightLetter =[];
var wrongLetter = [];
var underScore = [];

//html manipulation
var blankSpaces = document.getElementsbyId('spaces')

// Main
// ====================================================

//create underscores based on length of word
var generateUnderscore = () => {
	for(var i = 0; i < chosenName.length; i++){
		underScore.push('_');
	}
	return underScore;
}

// Get users guess
document.addEventListener('keypress', (event) => {
	var keyWord = String.fromCharCode(event.keyCode);
//if users guess is right
	if(chosenName.indexOf(keyWord) > -1) {
		// add to rightLetter array
			rightLetter.push(keyWord);
		//replace underscore with the right letter
			underScore[chosenName.indexOf(keyWord)] = keyWord;
		// Check if word matches guesses	
			if(underScore.join('') == chosenName) {
				alert('You Win');//CHANGE THIS TO RESET!
			}
	} 
	else {
		// add to wrongLetter array
			wrongLetter.push(keyWord);
	}

});
//define images to be used
//--load image upon page load
//--match the image to the randomly selected word
//-hange the image to match the puzzle word upon win or loss

//-define names to be used in hangman
//--randomly select one name from the group/array/object upon load
//--generate number of underscores equal to word length of selected word
//--replace underscore upon correct guess
//--change the word upon win or loss

//-set number of guesses to 12 at start upon load
//--reduce number by 1 when a wrong guess is made
//--reset the number when game is won or lost

//-record number of wins

//-record number letters already guessed
//--reset letters guessed when game is won or lost

