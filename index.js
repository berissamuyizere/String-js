// Extract the last four characters from the string "extravaganza"
let word = "extravaganza";
let lastFour = word.slice(-4);
console.log({lastFour}); 

// Insert "eat" at the fourth index in the given string
let text = "The quick fox jumped over the lazy dog";
let newText = text.slice(0, 4) + " eat " + text.slice(4);
console.log(newText);

// Find specific words in strings
let string1 = "The pupils are reading in the library";
let string2 = "The child was sitting on the table before it fell";
let findAre = string1.includes("are");
let findSitting = string2.includes("sitting");
console.log(`"are" found: ${findAre}`); 
console.log(`"sitting" found: ${findSitting}`);