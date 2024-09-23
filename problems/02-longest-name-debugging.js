/*
Longest Name

The function `longestName`` takes an array of names and returns the longest
name. If there's a tie, it returns the first name of the longest length.
However, this implementation is full of bugs! Use your debugging skills to find
and fix those bugs. Note: You can assume that the array of names will always
have a length of 1 or greater.
*/

function longestName(names) {
  let currentLongest = names[1];

  for (let i = 0 ; i < names.length ; i++) {
    if (names[i].length > currentLongest.length) {
      currentLongest = names[i];
    }
  }
  return currentLongest;

}

testNames = ["James", "Patricia", "Michael", "Elizabeth", "Chris",
             "Sarah", "Margaret", "Kenneth", "Stephanie", "Jonathan",
             "Jeremy", "Samantha", "Alexander", "Catherine", "Benjamin"]

console.log(longestName(testNames)); // "Elizabeth"

// Watch the walkthrough video for how to debug this problem


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = longestName;
