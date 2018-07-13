// NOTE: We can use whatever folder structure we want inside of this 'tests' folder. jest just looks for files that end in ".test.js".

// Example function to be tested
const add = (a, b) => {
  return a + b
}

// Example test
test('should add two numbers', () => {
  // 1. Run the function and store the result
  const result = add(3, 8)

  // 2. Create an assertion to test the result against the expected value
  expect(result).toBe(11) // This test PASSES
})

// Example test 2
test('should add two numbers', () => {
  // 1. Run the function and store the result
  const result = add(11, 8)

  // 2. Create an assertion to test the result against the expected value
  expect(result).toBe(19) // This test FAILS
})

// Example test 3
test('should add two numbers', () => {
  // 1. Run the function and store the result
  const result = add(23,33)

  // 2. Create an assertion to test the result against the expected value
  expect(result).toBe(56) // This test FAILS
})

// Example test 4
test('should add two numbers', () => {
  // 1. Run the function and store the result
  const result = add(28, 34)

  // 2. Create an assertion to test the result against the expected value
  expect(result).toBe(62) // This test FAILS
})

// Example test 5
test('should add two numbers', () => {
  // 1. Run the function and store the result
  const result = add(44, 55)

  // 2. Create an assertion to test the result against the expected value
  expect(result).toBe(99) // This test FAILS
})

// Example test 6
test('should add two numbers', () => {
  // 1. Run the function and store the result
  const result = add(-6, 3)

  // 2. Create an assertion to test the result against the expected value
  expect(result).toBe(-3) // This test FAILS
})