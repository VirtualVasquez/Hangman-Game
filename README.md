# Undertale Hangman

An Undertale-themed Hangman game, created using React, React Bootstrap and _determination_. 

![Intro Image](/images/readme-intro.png)

## Installation

You will need to install the React Bootstrap package. To do so, at the root of the file directory, run `npm run install` or `yarn`.

## How to Play

Upon loading, you'll reach the intro screen. Press any key or click on the screen to begin the game.

Once on the game screen, a character from the game Undertale will appear on the screen. Try to guess the character's name, one letter at a time. Press any letter on your keyboard to submit your guess. Correct guesses will replace the blank spaces inside the white-bordered rectangle. Incorrect guesses will populate underneath the rectangle on the far-right side, and reduce your total number of chances by 1. You start with 6 chances for each puzzle. You'll get different result screens for when you win or lose.

![Game Image](/images/readme-explain.png)

![Result Image](/images/readme-win.png)

If you're on mobile, or if you prefer to use a touch-input or mouse, you can click on the button labeled "Fight" to have an onscreen keyboard appear. Any letter selected on the screen will function just as a key press on a physical keyboard would.

![Keyboard Image](/images/readme-keyboard.png)

## Road Map

* I would like to add music throughtout the project
    * Different music should play for each character that appears
    * Right and wrong guess should trigger different sounds effects
    * Win and lose screens should play different music.
* The onscreen keyboard should be better scaled on mobile devices for ease of use.

## Technologies Used

* HTML
* CSS
* Javascript
* React
* React Bootstrap


