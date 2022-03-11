const { checkOddEven } = require("./checkOddEven");
test.each([
    [1, "Odd"],
    [5, "Odd"],
    [16, "Even"],
])(
    "%d should return %s",
    (a, expectedResult) => {
        expect(checkOddEven(a)).toBe(expectedResult);
    }
);
test("input must be a number", () => {
    const input = "satu";

    expect(() => {
        checkOddEven(input);
    }).toThrow("Input must be Integer!");
});