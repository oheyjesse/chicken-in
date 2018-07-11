// NOTE: We can use whatever folder structure we want inside of this 'tests' folder. jest just looks for files that end in ".test.js".

// Example function to be tested
const add = (a, b) => {
  return a + b
}

// Example test
test('should add two numbers', () => {
  // 1. Run the function and store the result
  const result = add (3, 8)

  // 2. Create an assertion to test the result against the expected value
  expect(result).toBe(11) // This test PASSES
})


// Example test 2
test('should add two numbers', () => {
  // 1. Run the function and store the result
  const result = add (11, 8)

  // 2. Create an assertion to test the result against the expected value
  expect(result).toBe(19) // This test FAILS
})