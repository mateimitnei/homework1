// Scope and Closure

// Scope in JavaScript
// In JavaScript, there are two types of scope: global and local.
// Variables defined inside a function have a local scope, while variables defined outside a function have a global scope.
// Each function creates a new local scope when it is called.

// Global Scope
// Everything written outside a function is in the global scope. You don't need to create a global scope using any construct; you are already in it as soon as you start writing your code.
var language = "JavaScript"; // By default, scope is global

// Variables in the global scope are available in any part of the code and in other scopes.
// The global scope "lives" as long as the application "lives."
var language = "JavaScript";
console.log(language); // "JavaScript"

function show() {
    console.log(language); // here we have access to the "language" variable
}
show(); // "JavaScript"

// Local Scope
// Variables defined inside a function are in the local scope. And, since a new local scope is created each time a function is called, the same variable can be used in different functions with different values. This is possible because variables in the local scope are not accessible from anywhere else.

// Global scope
function someFunction() {
    // Local scope #1
    function someOtherFunction() {
        // Local scope #2
    }
}

// Local scope "lives" only from the moment the function is called until it finishes execution.

// Context
// Context is used to refer to the value of 'this' in a specific part of the code.
// Scope refers to the visibility of variables, while context refers to the value of 'this' in the same scope. That is, 'this' refers to the context in which the function is called.

// In the global scope, the context is always the Window object.
console.log(this); // Window { ... }

function functionThis() {
    console.log(this);
}

functionThis(); // also Window { ... } since the function is not a property of an object

// If you call a function in strict mode, the context will be undefined.
'use strict';
function strictThis() {
    console.log(this);
}

strictThis(); // undefined

// If a function is a method of an object (functions that are properties of an object are called methods), the context will not be the Window object but the object to which the function belongs.
var object = {
    language: "JavaScript",
    returnLanguage: function() {
        console.log(this.language);
    }
};
object.returnLanguage(); // 'this' refers to 'object', so "JavaScript"

// Execution Context
// Execution context refers to the scope, not the context (value of 'this').
// Execution context is a concept that links all the concepts we've covered. It is an entity that contains everything necessary to run each function (variables, function arguments, scopes, 'this').

// When the JavaScript interpreter starts executing code, the default context (scope) is global. That is, 'this' is Window (in 'use strict' mode, it is undefined), and the scope is global.

// Initially, the execution context for all code is the global context. It automatically "attaches" to the execution context when the code starts running.

// Then, when a function is called and executed, it can "attach" its context to the execution context. The same happens when one function is called inside another or elsewhere.

// Each function creates its own execution context. The global context can be only one, but there can be as many function contexts as needed. When functions create their contexts, they all enter the execution stack according to the Last In, First Out (LIFO) principle. After execution, it is removed from the stack, and the next one is executed.

// Execution context has two phases: creation and code execution.
// The creation phase is the first phase that begins when the function is called, but its code has not yet been executed.

// At this stage, three key things happen:
// • Creation of a variable object (Activation Object);
// • Creation of a scope chain (Scope Chain);
// • Assigning a value to the context ('this').

// The Variable Object contains all variables, functions, and other declarations (constructs declared) defined in a specific execution context. When a function is called, the interpreter scans the code for declarations belonging to this function. All of this is placed in a single object called the Variable Object.
"variableObject"; {
    // contains function arguments, internal variables, and function declarations
}

// The Scope Chain is created after the Variable Object is created and contains it. In other words, it contains its Variable Object and the parent functions' Variable Objects.
"scopeChain"; {
    // contains its own Variable Object and other Variable Objects from parent execution contexts
}

// The scope chain is roughly used to search for variables. Remember that variables defined inside a function are not visible outside; we cannot access them. But we can access variables declared outside the function at a higher level. All this is thanks to the scope chain.

// For example, there are two declared functions; one is nested in another. The parent function has a variable "a", but we access this variable in the nested function.

// Global scope
console.log(a); // Uncaught ReferenceError: a is not defined
function outer(param) {
    // scope of the 'outer' function
    var a = param;
    function nested() {
        // scope of the 'nested' function
        console.log(a);
    }
    nested();
}
outer(5); // 5

// Here’s what happens: we access the variable "a" in the nested function "nested". The interpreter does not find it in the local scope of this function. Thanks to the scope chain, it starts going up to the parent scopes and searches for the required variable. Once the variable is found, the search stops, and we get the variable's value. If the variable is not found, the value returned is undefined.

// Searching through the scope chain can continue up to the global scope; this is the final point of the search. If the variable is in the same function, the scope chain search will not be performed. This allows variables with the same name to be defined without worrying about overriding the same variable in the global scope.

// Assigning a value to the context ('this') means that the correct context is assigned to 'this'.

// As a result of the first phase of creating the execution context, an Execution Context Object is created, which can be represented as an abstract object:
executionContextObject = {
    "scopeChain": {},
    "variableObject": {},
    "this": valueOfThis
}

// The code execution phase means executing JavaScript code.

// Lexical Scope
// Lexical scope is a concept that means inner functions have access to variables of their parent scope, i.e., those variables that are in higher-level functions.

// Child, nested, functions are lexically bound to their parent's execution context. This was already considered in the scope chain example. Here's another example:
function grandfather() {
    var name = "John";
    // 'likes' is not available here
    function parent() {
        // 'name' is available here
        // 'likes' is not available here
        function child() {
            // 'name' is available here
            var likes = "JavaScript";
        }
    }
}

// As you can see, you can access variables located at higher levels, but you cannot access lower-level variables from higher levels.

// Closure
// The concept of closure is close to lexical scope. A closure is created when an inner function tries to access the scope chain of an outer function, i.e., variables outside the lexical scope. A closure contains its own scope chain, its parent's scope chain, and the global scope.

// Thanks to closure, you can access not only the variables defined in the outer function but also the arguments of the outer function.

// Also, closure allows you to access variables in the outer function even after the inner function is returned. After the inner function is returned, access to all resources of the outer function is preserved.

// When the inner function is returned from the function, the returned function will not be called automatically after calling the outer function. First, you need to save the call of the outer function to a variable, and then call it (the variable) as a function.
function greet() {
    var name = "John";
    return function () {
        console.log("Hi " + name + "!");
    }
}

greet(); // nothing will happen
// the returned function from greet() is saved in greetLetter
var greetLetter = greet();
// calling greetLetter will call the returned function from the greet() function
greetLetter(); // "Hi John!"

// Remember that the 'greetLetter' function can access the 'name' variable, which belongs to the 'greet' function, even if the 'greet' function has finished executing. You could say that the 'name' variable remains in the closure.

// You can call the returned function without assigning it to a variable using the double parenthesis notation "()"().
greet()(); // "Hi John!"

// Block Statements
// Block statements, such as 'if', 'for', etc. (except functions), do not create a new scope. Variables declared inside a block statement using the 'var' keyword are visible everywhere.

// However, variables declared using the 'let' or 'const' keywords inside such block statements will not be visible outside them. Such variables "create" their own block scope.
if (true) {
    var name = "John";
    let language = "JavaScript";
    const framework = "React";
}

console.log(name); // "John"
console.log(language); // Uncaught ReferenceError: language is not defined
console.log(framework); // Uncaught ReferenceError: framework is not defined

// The 'let' and 'const' operators allow you to declare a local variable with a scope limited to the current code block.
