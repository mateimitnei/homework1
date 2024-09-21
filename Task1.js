const printedLog = document.getElementById("log");

// The result is shown in Task1.html

// 1. Create the main self-executing function run() where the main code will be executed.
(function run() {
    const firstDice = getRndNumber();
    const secondDice = getRndNumber();
    let log = "The dice have been rolled... They are ";
    log = areNumbersEqual(firstDice, secondDice, log);
    log = isBigDifference(firstDice, secondDice, log);
    printResult(log);
})()

// 2. Create a function to get random numbers (getRndNumber) from 1 to 6.
function getRndNumber() {
    return Math.floor((Math.random() * 6) + 1);
}

// 3. Create a function that will concatenate all strings into one (setResult).
function setResult(...log) {
    return log.join('');
}

// 4. Create a function to check for matches (isNumbersEqual).
function areNumbersEqual(a, b, log) {
    if (a === b) {
        let result = `matching: both are ${a}!`;
        let newLog = [log, result].join('');
        return setResult(newLog);
    }
    else return log;
}

// 5. Create a function to check for differences (isBigDifference).
function isBigDifference(a, b, log) {
    if (Math.abs(a - b) > 0) {
        let result = `different: ${a} and ${b}`;
        let newLog = [log, result].join('');
        return setResult(newLog);
    }
    else return log;
}

// 6. Create a function to calculate the total result.
function diceSum(a, b) {
    return a + b;
}

// 7. Create a function that prints the data obtained using the setResult function into HTML (printResult).
function printResult(log) {
    printedLog.innerHTML = log;
}
