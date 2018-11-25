//GLOBAL VARIABLES
//---------------------------------------
// Used to record how many times a letter can be pressed
var doubleWord = ['a','b','c',
          'd','e','f',
          'g','h','i',
          'j','k','l',
          'm','n','o',
          'p','q','r',
          's','t','u',
          'v','w','x',
          'y','z'];
//Holds the all the names that can be generated
var nameBank =['flowey', 'toriel', 'sans', 'papyrus', 'undyne'];
//Holds chosenName
var chosenName = "";
//Holds letters in word
var lettersInWord = [];
//Holds number of blanks in word
var numBlanks = 0;
//Holds Underscores and successful guesses
var blanksAndSuccesses =[];
//Holds Wrong guesses
var wrongLetters = [];
//Counters
var winCount = 0;
var loseCount = 0;
var guessesLeft = 9;
var rightGuessCounter = 0;
//FUNCTIONS
//This secdtion is used to DEFINE the functions that need to be used in the game.
//As is, these functions will not self-initiate.
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



//the reset function will begin upon the page loading, or a new game starts, win or loss
function reset()
{
  //Chooses word randomly from the nameBank
  chosenName = nameBank[Math.floor(Math.random() * nameBank.length)];
  //Splits the choosen word into individual letters
  lettersInWord = chosenName.split('');
  //number of letters of the chosenName equals the number of underscores generated
  numBlanks = lettersInWord.length;
  
  //RESET
  //these variables are what the counters and guessing space start at upon loading
  //OR beginning a new game, due to win or loss
  //var wincount is ommitted, as to be able to retain the number of wins between games
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
  test=false;
  //"StartGame();" is the next function that loads upon "reset()" finishing
  //if it weren't here, then the page would remain static.
  startGame();
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
    reset();
  }
  // When number of Guesses reaches 0 then You lose
  else if(guessesLeft === 0)
  {
    //Counts Losses
    loseCount++;
    //Changes HTML
    reset();
  }
}

//MAIN PROCCESS
//------------------------------------------- 
//Initiates the Code; loops back up on the javascript
//to where the function startGame was first defineed,
//then moves down sequentially
startGame();

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