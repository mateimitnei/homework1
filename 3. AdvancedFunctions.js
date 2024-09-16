// Advanced Function Features
//
// Arguments
// Function parameters act as local variables within the function body. When specifying function parameters, there is no need to use the `var` or `let` keywords, as JavaScript automatically declares them as local variables.
function func(a, b, c) { /* ... */ }  // a, b, c are function parameters

// The values passed when calling the function are called arguments.
// When a function is called, it receives a list of arguments, which are assigned to the function parameters in the order they are provided: the first argument is assigned to the first parameter, the second argument to the second parameter, and so on.

// Arguments modified inside the function remain unchanged outside if the arguments are primitives:
function sayHello(name) {
    var prefix = "Hi Mr. ";
    name = "Bart";
    return prefix + name;
}

var name = "Smith";
console.log(name); // "Smith"
console.log(sayHello(name)); // "Hi Mr. Bart"
console.log(name); // "Smith"

// If an object is passed as an argument to a function, and its properties are modified inside the function, those changes will persist outside as well:
function sayHello(param) {
    var prefix = "Hi Mr. ";
    param.name = "Bart";
    return prefix + param.name;
}

var obj = { name: "Smith" };
console.log(obj.name); // "Smith"
console.log(sayHello(obj)); // "Hi Mr. Bart"
console.log(obj.name); // "Bart"

// This happens because primitive types are passed by value, while complex types like objects are passed by reference.
// More details on this can be found in the section on objects.

// A function can be called with any number of arguments, regardless of how many parameters the function expects.
// If the number of arguments differs from the number of parameters, no error occurs.
function sayHello(firstName, secondName) {
    let prefix = "Hi Mr. ";
    return prefix + firstName + " " + secondName;
}

sayHello("John", "Connor"); // "Hi Mr. John Connor"
sayHello("John"); // "Hi Mr. John undefined"

// If a function has more parameters than arguments passed to it, the parameters without corresponding arguments are assigned the value `undefined`.

// There are two ways to avoid such errors.

// Old way
// An additional check for the availability of arguments:
function sayHello(firstName, secondName) {
    let prefix = "Hi Mr. ";
    return prefix + firstName + (secondName || "Nobody");
}

sayHello("John"); // "Hi Mr. John Nobody"

// New way (ES6)
// Default parameter:
let sayHello = function(firstName = "Anakin", secondName = "Skywalker") {
    const prefix = "Hi Mr. ";
    return prefix + firstName + " " + secondName;
}

sayHello(); // "Hi Mr. Anakin Skywalker"
sayHello("Luke"); // "Hi Mr. Luke Skywalker"
sayHello(null, "John"); // "Hi Mr. null John"
sayHello(undefined, undefined); // "Hi Mr. Anakin Skywalker"

// Function parameters can be initialized with default values, which will be used if the parameters are not initialized with arguments during the function call.
// Passing `undefined` as an argument is treated as if the argument is absent.

// A function using default parameter values always works in strict mode, even if strict mode is not enabled:
function testArguments(firstName, secondName = "Skywalker") {
    console.log(firstName === arguments[0]);
    console.log(secondName === arguments[1]);
}

testArguments("Anakin");
// true
// false

// Since only one argument is passed to the function, `arguments[1]` is `undefined`, so `console.log(secondName === arguments[1]);` returns `false`.

// If a function uses default parameter values, declaring strict mode within the function will result in a syntax error:
function testArguments(arg1 = 1) {
    "use strict";   // Error
}

// The default value can be a simple or complex expression:
function testArguments(arg1 = 1, arg2 = 2 + 2) {
    console.log(arg1, arg2);
}

testArguments(1); // 1 4

// The value of a previous parameter can be used as the default value for any subsequent parameters:
function testArguments(arg1, arg2 = arg1) {
    console.log(arg1, arg2);
}

testArguments("John"); // John John

// Attempting to use the value of a subsequent parameter as the default value for a preceding parameter will result in an error:
function testArguments(arg1 = arg2, arg2) {
    console.log(arg1, arg2);
}

testArguments(undefined, "John"); // Error

// Parameters are created at the moment the function is called, in the order they appear in the function definition. Each parameter is created similarly to a variable declared with the `let` keyword. This means that using a parameter before it is created will cause an error.

// Pseudo-array `arguments`
// `arguments` is a local variable available within every function.
// It contains information about the number and value of all parameters passed to the function during its call.
function sayHello() {
    console.log(arguments);
}
sayHello("John", "Connor"); // (2) ["John", "Connor"]

// Even in a function that does not accept arguments, you can still access any arguments passed to it.
// `arguments` is not available in arrow functions.

// Using `arguments`, you can access each argument individually.
// The numbering starts from zero.
function sayHello(greeting, name) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(greeting + name + arguments[2] + arguments[3]);
}

sayHello("Hi, ", "John", " Connor", "!"); // "Hi, John Connor!"

// `arguments` has a single property `length`. For example, you can use it to output all passed parameters using a simple `for` loop.
function sayHello(greetings, name) {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
sayHello("Hi, ", "John", " Connor", "!");

// According to `typeof`, `arguments` is an object. However, it can be converted into a real array.
function checkType() {
    console.log(typeof arguments);
    console.log(Array.isArray(arguments));
    let arrayArguments = Array.prototype.slice.call(arguments);
    console.log(Array.isArray(arrayArguments));
}
checkType();
// object
// false
// true

// We'll discuss arrays in more detail later in our course.

// Rest Operator
// The `...` (rest) operator is used instead of `arguments`.
// Arguments received using the `...` operator are actual arrays, with all their methods and properties.
function rest(...args) {
    console.log(args);
    console.log(Array.isArray(args));
}
rest(1, 2, 3);
// (3) [1, 2, 3]
// true

// If more parameters are passed to a function than it expects, the `...` (rest) operator accumulates all the "extra" arguments.
function rest(person, ...args) {
    console.log(person);
    console.log(...args);
}
rest("John", "Bob", "Carl");
// "John"
// "Bob Carl"
