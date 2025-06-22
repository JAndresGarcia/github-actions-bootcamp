const { default: test } = require("node:test")
const operations = require("./index")

test("Sum two numbers working correctly", () => {
    const result = operations.sumTwoNumbers(2,1);
    
    expect(result, 3);
})

test("Sustract two numbers working correctly", () => {
    const result = operations.sustractTwoNumbers(5,3);

    expect(result, 2);
})

test("Multiply two numbers working correctly", () => {
    const result = operations.multiplyTwoNumbers(10, 10);

    expect(result, 100);
})