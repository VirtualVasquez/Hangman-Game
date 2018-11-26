//GLOBAL VARIABLES
//---------------------------------------
var nameBank =['flowey', 'toriel', 'sans', 'papyrus', 'undyne'];
var chosenName = "";
var winCount = 0;
var loseCount = 0;
let intro = document.querySelector("#startScreen");
let puzzle = document.querySelector("#gameScreen");
//FUNCTIONS
//----------------------------------------

// DOM Manipulators
function updateWord(){
  document.getElementById('wordToGuess').innerHTML = ("Your Word to Guess: " + "<br>" + blanksAndSuccesses.join(' '))
}
function updateWins(){
  document.getElementById('winCounter').innerHTML = ("Wins: " + winCount)
}
function updateLosses(){
  document.getElementById('loseCounter').innerHTML = ("Losses: " + loseCount)
}
function updateNumGuesses(){
  document.getElementById('numGuesses').innerHTML = ("Number of Guesses Left: " + "<br>" + guessesLeft)
}
function updateWrongGuesses(){
  document.getElementById('wrongGuesses').innerHTML = ("Wrong Letters Guessed: " + "<br>" + wrongLetters)
}
function noGuesses(){
  document.getElementById('wrongGuesses').innerHTML = ("Wrong Letters Guessed: " + "<br>" + "You Haven't Tried Yet")
}


function goToGame() {

  document.onkeyup =function(event){

    startGame();
  }

}

function showFlowey(){

}
function dancingBones(){

}

function startGame()
{
  //Chooses word randomly from the nameBank
  chosenName = nameBank[Math.floor(Math.random() * nameBank.length)];
  //Splits the chosenName into individual letters
  lettersInWord = chosenName.split('');
  //Get the number of blanks
  numBlanks = lettersInWord.length;
  
  //RESET
  //===========================================================
  letterGuessed = 0;
  rightGuessCounter = 0;
  guessesLeft = 9;
  wrongLetters =[];
  blanksAndSuccesses =[];
  doubleWord = ['a','b','c',
            'd','e','f',
            'g','h','i',
            'j','k','l',
            'm','n','o',
            'p','q','r',
            's','t','u',
            'v','w','x',
            'y','z'];
  test = false;
  //Populate blanks
  for(var i = 0; i< numBlanks; i++)
  {
    blanksAndSuccesses.push('_');
    document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses;
  }

  //Changes HTML 
  updateWord();
  updateWins();
  updateLosses();
  updateNumGuesses();
  noGuesses()
}

function compareLetters(userKey)
{
        //Wanted to define var small = userKey.toLowerCase();
        //however, replacing instances of "userKey" with "small"
        //did not yield success

        //If user key exist in choosen word then perform this function 
        if(chosenName.indexOf(userKey) > -1)
        {
          //Loops depending on the amount of blanks 
          for(var i = 0; i < numBlanks; i++)
          {
            //Fills in right index with user key
            if(lettersInWord[i] === userKey)
            {
              rightGuessCounter++;
              blanksAndSuccesses[i] = userKey;
              updateWord();
            } 
          }
        }
        //Wrong Keys
        else
        {
          wrongLetters.push(userKey);
          guessesLeft--;
          //Changes HTML
          updateNumGuesses();
          updateWrongGuesses();
        }
}
function winLose()
{
  // When number blanks if filled with right words then you win
  if(rightGuessCounter === numBlanks)
  {
    //Counts Wins 
    winCount++;
    //Changes HTML
    startGame();
  }
  // When number of Guesses reaches 0 then You lose
  else if(guessesLeft === 0)
  {
    //Counts Losses
    loseCount++;
    //Changes HTML
    startGame();
  }
}

//MAIN PROCCESS
//------------------------------------------- 
//Initiates the Code; loops back up on the javascript
//to where the function startGame was first defineed,
//then moves down sequentially

// startGame();
intro.onclick = introToGame;
document.onkeyup = function(event)
{
  test = true;
  var letterGuessed = event.key; 
  for(var i = 0; i < doubleWord.length; i++)
  { 
    if(letterGuessed === doubleWord[i] && test === true)
    {
      var spliceDword = doubleWord.splice(i,1);
      compareLetters(letterGuessed);
      winLose();
    }
  }   
    
}

//had trouble understanding event.key, userKey.
//could not change picture to correspond with each puzzle



 function introToGame(e) { 
    intro.style.display = "none";
    puzzle.style.display = "block";
    document.querySelector("#firstSound").pause();
    startGame();
 }







