// Functions and Their Types

// Definition and Syntax
// A function is a construct used to repeatedly call the same piece of code or perform the same actions in different parts of a program.
// One of the principles of programming is the DRY (Don't Repeat Yourself) principle, which suggests avoiding code duplication in a program.

// Function syntax:
function functionName(argument1, argument2) {
    // statements
    // return
}

// function - keyword for declaring a function
// functionName - the name of the function for future reference
// argument - arguments passed to the function (optional)
// statements - the code that makes up the body of the function (the code executed after calling the function)
// return - keyword indicating the value to be returned (optional)

// Example:
function sayHello(name) {
    let upperCaseName = name.toUpperCase();
    return "Welcome Mr. " + upperCaseName;
}

let yourName = "Johnson";
sayHello(yourName); // "Welcome Mr. JOHNSON"
// some code
sayHello(yourName); // "Welcome Mr. JOHNSON"
// some code
sayHello("Smith"); // "Welcome Mr. SMITH"

// When naming a function, it is recommended to follow this guideline: the first word should always be a verb that describes the action performed, followed by a description.
getElementById();
loadData();
bindEvents();
generateUID();

// A function should perform only the action implied by its name.

// Function Without Arguments
function getCurrentYear() {
    let date = new Date();
    return date.getFullYear();
}
const currentYear = getCurrentYear();
console.log(currentYear); // current year

// Function Without return
function noReturn() {
    var sum = 0;
    for (var i = 0; i < 10; i++) {
        sum += i;
    }
    console.log(sum);
}
noReturn(); // undefined

// If a function does not contain the return keyword, it will return a special value undefined.
// Code after a return statement is not executed.

function checkReturn() {
    console.log("Before return");
    return true;
    console.log("After return");
}
checkReturn(); // "Before return"

// Function Declaration and Expression
// There are several ways to declare a function: Function Declaration and Function Expression.

// Function Declaration Syntax:
function funcDeclaration() {
    console.log("Function declaration");
}

// Function Expression Syntax:
var funcExpression = function () {
    console.log("Function expression");
};

// Differences Between Function Declaration and Function Expression:
// Function expressions are used when the function body needs to be assigned to a variable, for example, to pass the function as a parameter to another function:

var firstFunction = function () {
    console.log("Run firstFunction.");
};
function runFunction(param) {
    console.log("Run runFunction");
    param();
}

runFunction(firstFunction);

// Or to make it a property of an object:
var showFullName = function (firstName, secondName) {
    return firstName + " " + secondName;
};
var obj = {
    fullName: showFullName
};
obj.fullName("Keanu", "Reeves");

// Function declarations can be called both before and after they are declared:
showFullName("John", "Karter"); // "John Karter"
function showFullName(firstName, secondName){
    console.log(firstName + " " + secondName);
}
showFullName("Garry", "Miller"); // "Garry Miller"

// Function expressions are available for calling only after they are declared:
showFullName("John", "Karter"); // Error!
var showFullName = function(firstName, secondName){
    console.log(firstName + " " + secondName);
};
showFullName("Garry", "Miller"); // "Garry Miller"

// Anonymous Function
// An anonymous function is a function expression that is not assigned to a variable and has no name.
setTimeout(function(){
    console.log("Anonymous function.");
}, 2000);

// Anonymous functions are used when there is no need to call the function by name elsewhere in the code; they are declared at the point of use.

// Immediately Invoked Function Expression (IIFE)
// An Immediately Invoked Function Expression (IIFE) is a syntactic construct that allows a function to be invoked at the point of its definition.
(function () {
    console.log("IIFE");
}());
(function () {
    console.log("IIFE");
})();

// Parameters can also be passed to such a function.
(function sum(a, b) {
    console.log(a + b); // 5
})(2, 3);

// Arrow Function
// Arrow functions provide a shorter syntax for writing functions. Basic syntax:
var arrowFunction = (argument) => statements;
// arrowFunction - name of the function;
// argument - arguments passed to the function (optional);
// statements - code to be executed or the return value.

// If the function is short, it can be written in one line, without return and curly braces:
let getSum = (a, b) => a + b;

// Without curly braces, the function returns a value even without return.

// A function with a single parameter can be written without parentheses:
let getSum = a => a + 2;

// When using curly braces, you must specify the return keyword:
let getSum = (a, b) => { return a + b; };

// The same function written as a function expression:
let getSum = function(a, b) { return a + b; };

// Functions without parameters are written with empty parentheses:
let getYear = () => {
    return new Date().getFullYear();
};

// Arrow function as an anonymous function.
// The most common use of anonymous arrow functions is in iterator functions (methods):
[1,2,3,4].map(item => item * 2); // [2, 4, 6, 8]

// item => item * 2 - an anonymous arrow function passed to the map method.

// Some of these topics will be covered further in the course.
