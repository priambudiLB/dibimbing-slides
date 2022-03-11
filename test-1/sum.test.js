const { sum } = require("./sum");
test("1 + 2 equals to 3", () => {
    const result = sum(1, 2); // Call the function.
    expect(result).toBe(3); // Test the result by comparing it
});