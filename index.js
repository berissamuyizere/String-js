// Extract the last four characters from the string "extravaganza"
let word = "extravaganza";
let lastFour = word.slice(-4);
console.log({lastFour}); 

// Insert "eat" at the fourth index in the given string
let text = "The quick fox jumped over the lazy dog";
let newText = text.slice(0, 4) + " eat " + text.slice(4);
console.log(newText);
