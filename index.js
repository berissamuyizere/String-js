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

//Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world"

// Convert to uppercase
let upperCaseWord = "wonderful".toUpperCase();
console.log(upperCaseWord); 

// Converting to lowercase
const lowerCase1 = "amazing".toLowerCase();
const lowerCase2 = "UndERneath".toLowerCase();
console.log(lowerCase1, lowerCase2); 

// Converting to title case
const titleCase = "A wonderful world"
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");
console.log(titleCase); 

//Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"
let story = "The quick brown fox jumps over the lazy dog";
const words = story.toLowerCase().split(" ");

let countThe = 0;
let countBrown = 0;
for (let word of words) {
    if (word === "the") countThe++;
    if (word === "brown") countBrown++;
}
console.log(`"the" appears: ${countThe} times`); 
console.log(`"brown" appears: ${countBrown} times`); 