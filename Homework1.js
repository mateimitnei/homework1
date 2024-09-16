/*
Homework Instructions

Main Homework Task #1:
Objective: Learn basic techniques for working with functions.

1. Create the main self-executing function run() where the main code will be executed.
   This function should also contain calls to all other functions.
2. Create a function to get random numbers (getRndNumber) from 1 to 6.
   The value of each variable, which we use to store the dice result, should be obtained by calling this function.
3. Create a function that will concatenate all strings into one (setResult).
4. Create a function to check for matches (isNumbersEqual). It should contain the logic to check for a match and call the function that saves data into the concatenated string (setResult).
5. Create a function to check for differences (isBigDifference). It should contain the corresponding check and call the function to save data into the concatenated string (setResult).
6. Create a function to calculate the total result. The function should calculate the result and store it in the variable total.
7. Create a function that prints the data obtained using the setResult function into HTML (printResult).

Main Homework Task #2: “Rock, Paper, Scissors”
Objective: Learn to use functions and implement algorithms similar to real-world tasks.
The names of all functions are for reference. You can come up with your own.

Template for the homework:
Archive with the template - homework1Template

Condition:
You have two players who are playing a game. Each can get rock, paper, or scissors.
In reality, you have a function (getPlayerResult) that returns random numbers from 1 to 3:
1 — rock
2 — scissors
3 — paper

The following functionality is implemented in the template:
When a button is pressed, a random number is generated and displayed in the corresponding div element.

1. Instead of displaying the random number on the screen as in the example, you need to:
   Add a function (getNameById) that will take this number and return the word "rock", "scissors", or "paper" according to the dictionary mentioned above.
2. Display the resulting text string for each player on the screen.
3. Write a function (determineWinner) that will take two numbers, previously obtained from the getPlayerResult function, and decide which player won.
4. The result of the determineWinner function should be the number of the player who won.
   In other words, this function should return the number of the player who won.
5. The printResult function should take the number of the player who won and print a message in the div with id result, such as: "The first player won" — the player's number should be displayed as words.
*/
