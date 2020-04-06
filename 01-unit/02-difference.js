// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function difference(number1,number2) {
  if (number1 === undefined) number1 = 0;
  if (number2 === undefined) number2 = 0;
  return number1 - number2;
}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the difference of two numbers.
  var result = difference(1, 1);
  if (result !== 0) throw new Error('Expected difference(1, 1) to be 0. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should ignore additional numbers.
  var result = difference(1, 1, 2, 3, 4, 5);
  if (result !== 0) throw new Error('Expected difference(1, 1, 2, 3, 4, 5) to be 0. Received: ' + result);
  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.
  var result = difference(1);
  if (result !== 1) throw new Error('Expected difference(1) to be 1. Received: ' + result);
  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // When invoked with no numbers, it should return 0.
  var result = difference();
  if (result !== 0) throw new Error('Expected difference() to be 0. Received: ' + result);

  console.log('All tests have passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Oops,Something went wrong:');
  console.error(e.message);
}
