var quote = " Do Good,Be Good";
console.log(quote.trim());
console.log(quote.toLowerCase());
console.log(quote.toUpperCase());
console.log(quote.toLowerCase())
console.log(quote.trim());
var trimmedQuote = quote.trim();
var trimmedAndLowerQuote = trimmedQuote.toLowerCase
//strings are immutable -the value cannot be changed as it remains the same//
//Dot Chaining
var trimmedAndLowerQuote=quote.trim().toLowerCase();
console.log(quote.trim().toLowerCase());
//console.log(quote.trimLeft());
console.log(quote.trimStart());
console.log(quote.trimEnd());
console.log(quote.length);// should not use () 
console.log("😊.repeat(8));
var balance ="30000";
console.log(balance.padStart(7));//padstart calculates the  given  word length  and if the number is lesser then the word will shift to the difference of the padstart
console.log(balance.padStart(2));//same word will be left at the end of execution
