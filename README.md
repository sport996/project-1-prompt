## Project #1: Tic Tac Toe
# Game overview:
Tic Tac Toe game basically is between two players, whoever makes a horizontal, vertical, or diagonal row wins the game.
# Technologies used:
1. HTML
2. CSS
3. JavaScript
4. jQuery 
# Approach taken:
First step was to draw out the WireFrames and to think of applying the winning, lose, tie situations. second step was making simple html and css then writing the solution of the logic for the problem. after finishing the logic I worked on the css design and animations.
# Images of wireFrames and screenshots
# ![WireFrames](https://i.vgy.me/tZbs06.jpg)
# ![WireFrames](https://i.vgy.me/W24zdf.jpg)

# What went wrong or the differences:
- **Instead of having exit button it seemed better to have a reset.
- **It was planned to show an alert message of the result, but there was delays between the DOM tree and the alert message. So, it has to be shown within the page.
# ![Screenshots](https://i.vgy.me/YbWicC.png)

# How to determine the winner
1. Columns and rows: a loop will run in winner function through each column/row  in each iterate. So we are going to have 3 iterates each iterate will pass arguments to our check function which will take 3 arguments, checks if they are empty, if they are empty  it will return false. if they are not empty it will check if they are equal and return true and check what is the symbol of the player to return a win message.
2. Diagonals: if-else conditions will check the values of hard coded indexes and return the result.
# Future work:
1. Adding an AI or random opponent.
2. Enabling users to customize name and symbol.
3. Tracking rounds of wins, loses, and tie.
4. Enhancing the responsiveness.
