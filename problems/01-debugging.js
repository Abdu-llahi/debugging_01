/*
Debugging

Fix the bug in the code so that the example inputs produce the expected outputs.
*/

function medianNum(sortedNums) {
  if (sortedNums.length === 0) { // Check for an empty array
      return null;
  }

  let midIdx = Math.floor(sortedNums.length / 2); // Calculate the middle index correctly

  if (sortedNums.length % 2 !== 0) { // Odd length
      return Math.round(sortedNums[midIdx]); // Return the middle element
  } else { // Even length
      // Return the average of the two middle elements
      return Math.round((sortedNums[midIdx - 1] + sortedNums[midIdx]) / 2);
  }
}

// Example Test Cases
console.log(medianNum([1, 2, 3, 4, 5, 6])); // Expected Output: 4
console.log(medianNum([5, 8, 90]));         // Expected Output: 8
console.log(medianNum([5, 7, 8, 90]));      // Expected Output: 8
console.log(medianNum([]));                 // Expected Output: null
console.log(medianNum([3]));                // Expected Output: 3



/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = medianNum;
