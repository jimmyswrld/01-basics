/**
 * Task 10: Create a Band Name Generator
 */

// 1. Declare a function named generateBandName that takes two arguments: clothingColor and lastFoodEaten.
// 2. In the function, declare a variable named bandName and assign it to an initial value of an empty string.
// 3. Using string concatenation, assign bandName to the string "The " plus the clothingColor and lastFoodEaten variables.
// 4. Ensure the first letter of each word is capitalized.
// 5. Return the bandName variable.

function generateBandName(clothingColor, lastFoodEaten) {
  // Your code here
  // Initialize bandName to an empty string
  
  clothingColor = clothingColor ? formatWord(clothingColor) : "";
  lastFoodEaten = lastFoodEaten ? formatWord(lastFoodEaten) :"";
  let bandName = `The ${clothingColor} ${lastFoodEaten}`;
  // Function to capitalize the first letter of each word
  // Construct the band name
  return bandName;
}

function formatWord(word) {
  let ogWord = word.toString().toLowerCase()
 let newWord = ""
  for ( i=0 ; i <= ogWord.length - 1 ;i++) {
 if (i===0){
  newWord = `${ogWord.charAt(0).toUpperCase()}`
 } else{
newWord = newWord + ogWord.charAt(i);
 }
  }
  return newWord
}