//GLOBAL VARIABLES
//---------------------------------------
var nameBank =['alphys', 'asgore', 'flowey', 'mettaton', 'monsterkid', 'napstablook', 'papyrus', 'sans', 'toriel', 'undyne'];
var chosenName = "";
var winCount = 0;
var loseCount = 0;
let intro = document.querySelector("#startScreen");
let puzzle = document.querySelector("#gameScreen");
let idiot = document.querySelector("#loseScreen");
let bonetrousle = document.querySelector("#winScreen");
let character = document.querySelector("#left");
let introMusic = document.querySelector("#firstSound");
let themeMusic = document.querySelector("#secondSound");
let correctLetter = document.querySelector("#correct");
let wrongLetter = document.querySelector("#incorrect");
let winSound = document.querySelector("#winSound");
let loseSound = document.querySelector("#loseSound");
let muteMusic = document.querySelector("#muteMusic");
let playMusic = document.querySelector("#playMusic");
let fx = document.querySelectorAll(".fx");
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
function characterSelect(){
  if(chosenName === "alphys"){
    character.style.backgroundImage = "url('assets/images/alphys.png')";
    themeMusic.src = 'assets/sounds/alphys.mp3';
    themeMusic.play();
  } else if (chosenName === "asgore"){
    character.style.backgroundImage = "url('assets/images/asgore.png')";
    themeMusic.src = 'assets/sounds/asgore.mp3';
    themeMusic.play();
  } else if (chosenName === "flowey"){
    character.style.backgroundImage = "url('assets/images/flowey.png')";
    themeMusic.src = 'assets/sounds/flowey.mp3';
    themeMusic.play();
  } else if (chosenName === "mettaton"){
    character.style.backgroundImage = "url('assets/images/mettaton.png')";
    themeMusic.src = 'assets/sounds/mettaton.mp3';
    themeMusic.play();
  } else if (chosenName === "monsterkid"){
    character.style.backgroundImage = "url('assets/images/monsterkid.png')";
    themeMusic.src = 'assets/sounds/monsterkid.mp3';
    themeMusic.play();
  } else if (chosenName === "napstablook"){
    character.style.backgroundImage = "url('assets/images/napstablook.png')";
    themeMusic.src = 'assets/sounds/napstablook.mp3';
    themeMusic.play();
  } else if (chosenName === "papyrus"){
    character.style.backgroundImage = "url('assets/images/papyrus.png')";
    themeMusic.src = 'assets/sounds/papyrus.mp3';
    themeMusic.play();
  } else if (chosenName === "sans"){
    character.style.backgroundImage = "url('assets/images/sans.png')";
    themeMusic.src = 'assets/sounds/sans.mp3';
    themeMusic.play();
  } else if (chosenName === "toriel"){
    character.style.backgroundImage = "url('assets/images/toriel.png')";
    themeMusic.src = 'assets/sounds/toriel.mp3';
    themeMusic.play();
  } else if (chosenName === "undyne"){
    character.style.backgroundImage = "url('assets/images/undyne.png')";
    themeMusic.src = 'assets/sounds/undyne.mp3';
    themeMusic.play();
  }
}
var vid = document.getElementById("myVideo");

function enableMute() { 
  // introMusic.muted = true;
  // themeMusic.muted = true;
  // correctLetter.muted = true;
  // wrongLetter.muted = true;
  // winSound.muted = true;
  // loseSound.muted = true;
  // muteMusic.muted = true;
  // playMusic.muted = true;
  fx.forEach(fx => {
    fx.muted = true; 
  })

} 

function disableMute() { 
  fx.forEach(fx => {
    fx.muted = false; 
  })
}

//End DOM Manipulators

//Event Listeners
function hideIntro(e) { 
  intro.style.display = "none";
  puzzle.style.display = "block";
  introMusic.pause();
  startGame();
  characterSelect();
}
function backToGame(e) {
 idiot.style.display = "none";
 bonetrousle.style.display = "none";
 puzzle.style.display= "block";
 winSound.pause();
 winSound.currentTime = 0;
 loseSound.pause();
 loseSound.currentTime = 0;
}
function showLoss(e) {
puzzle.style.display = "none"; 
idiot.style.display = "block";
}
function showWin(e){
puzzle.style.display = "none"; 
bonetrousle.style.display = "block";
}
function Listening(e){ 
  if(puzzle.style.display === "block"){
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
  } else if (puzzle.style.display !== "block"){
    hideIntro(); 
    backToGame();
  } 
}
//END Event Listeners

//Game Logic
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
              correctLetter.play();
            }
 
          }
        }
        //Wrong Keys
        else
        { 
          wrongLetter.play();
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
    themeMusic.pause();
    showWin();
    winSound.play();
  }
  // When number of Guesses reaches 0 then You lose
  else if(guessesLeft === 0)
  {
    //Counts Losses
    loseCount++;
    //Changes HTML
    themeMusic.pause();
    showLoss();
    loseSound.play();
  }
}
//End Game Logic

//MAIN PROCCESS
//------------------------------------------- 
intro.onclick = hideIntro;
idiot.onclick = Listening;
muteMusic.onclick = enableMute;
playMusic.onclick = disableMute;
bonetrousle.onclick = Listening;
document.addEventListener("keydown", Listening);

//had trouble understanding event.key, userKey.
//could not change picture to correspond with each puzzle