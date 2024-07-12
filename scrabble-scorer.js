// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
   word = word.toUpperCase();
   let letterPoints = "";

   for (let i = 0; i < word.length; i++) {
 
     for (const pointValue in oldPointStructure) {
 
       if (oldPointStructure[pointValue].includes(word[i])) {
         letterPoints += `\nPoints for '${word[i]}':\n${pointValue}\n`
       }
 
     }
   }
   return letterPoints;
 };

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

//function initialPropmpt
function initialPrompt() {
   // prompt user for a word.
  let word = input.question(`Let's play some scrabble!\n\nEnter a word to score: `);
   // display scored word.
    console.log(oldScrabbleScorer(word));

  return word;
} 

let newPointStructure = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10
};

// object containing simpleScorer.
let simpleScorer1 = {
  name: "Simple Scorer",
  description: "Each letters is worth 1 point.",
  scorerFunction: function simpleScorer2(word){
   let score = 0;
   while (score<word.length){
    score = score + 1;
   }
   return score;
  }
}

//function simpleScorer
function simpleScorer(word){
  let score = 0;
  while (score<word.length){
   score = score + 1;
  }
  return score;
 };

// object containing vowelBounusScorer.
let vowelBonusScorer1 = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts each, consonant are 1 pt.",
  scorerFunction: function vowelBonusScorer2(word){
    let score = 0;
    let vowels = ["a","e","i","o","u"];
    for(i=0; i<word.length; i++){
      if (vowels.includes(word[i])){
        score = score + 3;
      } else if (!vowels.includes(word[i])){
        score = score + 1;
      }
    }
    return score;
  }
};

//function vowelBonusScorer
function vowelBonusScorer(word){
  let score = 0;
  let vowels = ["a","e","i","o","u"];
  for (i=0; i<word.length; i++){
    if (vowels.includes(word[i])){
      score = score + 3;
    } else if (!vowels.includes(word[i])){
      score = score + 1;
    }
  }
  return score;
};

// object containing scrabbleScorer.
let scrabbleScorer1 = {
  name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scorerFunction: function oldScrabbleScorer(word){
    word = word.toUpperCase();
    let letterPoints = 0;
 
    for (let i = 0; i < word.length; i++) {
  
      for (const pointValue in oldPointStructure) {
  
        if (oldPointStructure[pointValue].includes(word[i])) {
          letterPoints += `\nPoints for '${word[i]}':\n${pointValue}\n`
        }
  
      }
    }
    return letterPoints;
  }
};

//function scrabbleScorer
function scrabbleScorer(word){
  word = word.toUpperCase();
  let letterPoints = "";

  for (let i = 0; i < word.length; i++) {

    for (const pointValue in oldPointStructure) {

      if (oldPointStructure[pointValue].includes(word[i])) {
        letterPoints += `\nPoints for '${word[i]}':\n${pointValue}\n`
      }

    }
  }
  return letterPoints;
};

// array containing scoringAlgorithms.
const scoringAlgorithms = [simpleScorer1, vowelBonusScorer1, scrabbleScorer1];
// function to prompt user for rule slection.
function scorerPrompt(num) {
  let word = input.question(`Let's play some scrabble!\n\nEnter a word to score: `);
 
  let selectedScorer = input.question(`Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scarbble: Uses scrabble point system\nEnter 0, 1, or 2: `);
  //chnage these if statments! (nested causeing problem)   
    if (selectedScorer === "0") {
      console.log(`Score for ${word}: ${scoringAlgorithms[0].scorerFunction(word)}`);
     return simpleScorer(word);
  } else if (selectedScorer === "1") {
      console.log(`Score for ${word}: ${scoringAlgorithms[1].scorerFunction(word)}`);
     return vowelBonusScorer(word);
  } else if (selectedScorer === "2") {
      console.log(`Score for ${word}: ${scoringAlgorithms[2].scorerFunction(word)}`);
    }
    return selectedScorer;
  };

function transform() {};

function runProgram() {
 scorerPrompt();
}
//================================================================================================
// Simple Scoring Test
   //console.log("algorithm name: ", scoringAlgorithms[0].name);
   //console.log("scorerFunction result: ", scoringAlgorithms[0].scorerFunction("JavaScript"));
//------------------------------------------------------------------------------------------------
// Vowel Bonus Scoring Test
   //console.log("algorithm name: ", scoringAlgorithms[1].name);
   //console.log("scorerFunction result: ", scoringAlgorithms[1].scorerFunction("JavaScript"));
//------------------------------------------------------------------------------------------------
// Scarabble Scoring Test
   //console.log("algorithm name: ", scoringAlgorithms[2].name);
   //console.log("scorerFunction result: ", scoringAlgorithms[2].scorerFunction("JavaScript"));
//------------------------------------------------------------------------------------------------
// newPointStructure Test
  //console.log("Scrabble scoring values for");
  //console.log("letter a: ", newPointStructure.a);
  //console.log("letter j: ", newPointStructure.j);
  //console.log("letter z: ", newPointStructure["z"]);
//================================================================================================

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
