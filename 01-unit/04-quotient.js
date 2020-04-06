// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function quotient(num1, num2) {
  if (number1 === undefined) number1 = 0;
  if (number2 === undefined) number2 = 1;
  if (number2 === 0) return 'Error';
  return number1 / number2;
}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the quotient of two numbers.
  var result = quotient(2, 2);
  if (result !== 1) throw new Error('Expected quotient(2, 2) to be 1. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return the text 'ERROR' when the second number is 0.
  var result = quotient(2, 0);
  if (result !== 'Error') throw new Error('Expected quotient(2, 0) to be Error. Received: ' + result);
  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should ignore additional numbers.
  var result = quotient(2, 2, 2, 2, 2);
  if (result !== 1) throw new Error('Expected quotient(2, 2, .. n) to be 1. Received: ' + result);
  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.
  var result = quotient(2);
  if (result !== 2) throw new Error('Expected quotient(2) to be 2. Received: ' + result);
  // --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // When invoked with no numbers, it should return 0.
  var result = quotient(2);
  if (result !== 2) throw new Error('Expected quotient(2) to be 2. Received: ' + result);

  console.log('All tests have passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Oops,something went wrong:');
  console.error(e.message);
}
