/*
Global Functions
JavaScript has many global functions. Global functions refer to built-in functions that are available from any part of the code.
Global functions that will be covered:
• isNaN
• isFinite
• parseInt
• parseFloat
• encodeURI
• encodeURIComponent
• decodeURI
• decodeURIComponent

isNaN and isFinite
The isNaN() function checks if the passed parameter is a number or not. The function returns true if the parameter is not a number, and false if it is.
How it works: the passed parameter is converted to a number. If it's not a number (string, array, etc.), it is converted to NaN, and the result of this conversion is checked for equality to NaN.
Note that, for example, true is not converted to NaN but to the number 1. More about type conversion in the relevant course section.
*/
console.log(isNaN('NaN')); // true
console.log(isNaN(NaN)); // true
console.log(isNaN(0 / 0)); // true
console.log(isNaN(true)); // false
console.log(isNaN(null)); // false
console.log(isNaN(10)); // false

/*
In addition to the global isNaN() function, there is a more accurate function, Number.isNaN().
Number.isNaN() does not convert the value to a number, so it is safer to pass values that would normally turn into NaN but aren't actually NaN.
*/
console.log(isNaN('NaN')); // true
console.log(Number.isNaN('NaN')); // false
console.log(isNaN(undefined)); // true
console.log(Number.isNaN(undefined)); // false

/*
Since isNaN() converts the value to a number first, the string "NaN" and undefined are converted to NaN.
In Number.isNaN(), there is no conversion, so the result is more accurate.
*/

console.log(isFinite(Infinity)); // false
console.log(isFinite(NaN)); // false
console.log(isFinite(0)); // true
console.log(isFinite(444)); // true

/*
Just like isNaN(), there is a more precise function called Number.isFinite().
When passing a value to isFinite(), it will be forcibly converted to a number before comparison.
Number.isFinite() does not convert the value to a number, so the result is more accurate.
*/
console.log(isFinite('0')); // true
console.log(Number.isFinite('0')); // false

/*
parseInt and parseFloat
The parseInt() function converts a string to a number, character by character.
This function is often used to extract values like '10px'—where a number is followed by units of measurement. If you apply parseInt to '10px', the result will be 10 (and it will be a number, not a string).
*/
console.log(parseInt('10px', 10)); // 10

/*
The second parameter allows specifying the base (radix), and the function will return the number converted from the given base to decimal.
*/
console.log(parseInt("15*3", 10)); // 15
console.log(parseInt("1.3", 10)); // 1
console.log(parseInt('my17px')); // NaN

/*
Conversion only happens if the integer is at the beginning of the string, otherwise NaN is returned.
Number.parseInt() is also available and behaves identically to parseInt().
parseFloat() converts a string into a floating-point number.
If the first character cannot be converted to a number, NaN is returned.
*/
console.log(parseFloat('3.14')); // 3.14

/*
encodeURI and encodeURIComponent
URI (Uniform Resource Identifier) is a string that identifies a resource such as a document, image, file, service, or email inbox.
URL (Uniform Resource Locator) is a URI that not only identifies the resource but also provides information about its location.
encodeURI() encodes a URI.
The URL string is encoded, but not the parameters or hash.
Certain characters are not encoded:
; , / ? : @ & = + $ #
Some characters are never encoded (non-escaped characters):
Latin letters, decimal digits, — _ . ! ~ * ' ( )
*/
console.log(encodeURI("http://www.google.com/results with spaces#some-anchor"));
// http://www.google.com/results%20with%20spaces#some-anchor

/*
encodeURIComponent() encodes a URI.
The URL string is encoded, including special characters that are skipped by encodeURI() (except for non-escaped ones).
*/
console.log(encodeURIComponent("http://www.google.com/results with spaces#some-anchor"));
// http%3A%2F%2Fwww.google.com%2Fresults%20with%20spaces%23some-anchor

/*
Thus, encodeURIComponent() is better used for encoding URL parameters rather than the entire URL.
*/
const param = encodeURIComponent("#some-anchor");
const url = 'http://www.google.com/results/' + param;
console.log(url); // http://www.google.com/results/%23some-anchor

/*
encodeURI() and encodeURIComponent() encode special characters in the URL for safe use in HTTP requests.

decodeURI and decodeURIComponent
decodeURI() and decodeURIComponent() are used to decode URLs.
*/
console.log(decodeURI('http://site.com/%D0%BF%D0%BE%D0%BD%D1%8F%D1%82%D0%BD%D1%8B%D0%B9_javascript'));
// http://site.com/понятный_javascript

console.log(decodeURIComponent('https%3A%2F%2Fdrive.google.com%2Fdrive%2Fmy-drive'));
// https://drive.google.com/drive/my-drive
