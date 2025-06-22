const operations = require("./index")

test("Sum two numbers working correctly", () => {
    const result = operations.sumTwoNumbers(2,1);
    
    expect(result).toBe(3);
})

test("Sustract two numbers working correctly", () => {
    const result = operations.sustractTwoNumbers(5,3);

    expect(result).toBe(2);
})

test("Multiply two numbers working correctly", () => {
    const result = operations.multiplyTwoNumbers(10, 10);

    expect(result).toBe(100);
})

test("Hello, this is a test", () => {
    const result = "Hola";

    expect(result).toBe("Hola")
})