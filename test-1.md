---
theme: "night"
transition: "slide"
highlightTheme: "monokai"
slideNumber: true
title: "Testing: TDD & Unit Tests with Jest 1"
---

### Testing: TDD & Unit Tests with Jest 1

#### [Back to Home](index.html)

<style>
pre {
  background: #303030;
  padding: 10px 16px;
  border-radius: 0.3em;
  counter-reset: line;
}
pre code[class*="="] .line {
  display: block;
  line-height: 1.8rem;
  font-size: 1em;
}
pre code[class*="="] .line:before {
  counter-increment: line;
  content: counter(line);
  display: inline-block;
  border-right: 3px solid #6ce26c !important;
  padding: 0 .5em;
  margin-right: .5em;
  color: #afafaf !important;
  width: 24px;
  text-align: right;
}

.reveal .slides > section > section {
  text-align: center; 
}

h1,h2,h3,h4 {
  text-align: center;
}

p {
  text-align: center;
}
</style>

---

### Priambudi Lintang Bagaskara

Software Engineer-Web Platform | Tokopedia

---

### Outline

- Apa itu testing?
- Kenapa butuh testing?
- Test Driven Development
- Jest 101
- Exercise

---

### Apa itu testing?

--

1. Validasi kode supaya berjalan sesuai ekspektasi.
2. Dilakukan pada fase development, sebelum deployment.

---

### Kenapa butuh testing?

--

1. Membantu mencegah adanya bug.
2. Mengingatkan apabila ada kode yang "tersenggol" saat refactoring.
3. Testing tidak buang-buang waktu, dapat mengurangi biaya development.

---

### Test-Driven Development

![](img/tdd.png)

---

### Jest 101

--

### Jest

- JavaScript testing framework
- Open Source lead by Facebook
- https://github.com/facebook/jest
- https://jestjs.io/

---

### Start to test

--

### Jest Install

```bash
npm init # Kalau belum aja
```

```bash
npm install --save-dev jest
```

- `jest` - JavaScript testing framework

--

### Update scripts

```json=
{
  "scripts": {
    ...
    "test": "jest --verbose"
  }
}
```

`package.json`

--

create a test folder and file - `sum.test.js`

```TypeScript=
const { sum } = require("./sum");
test("1 + 2 equals to 3", () => {
    const result = sum(1, 2); // Call the function.
    expect(result).toBe(3); // Test the result by comparing it
});
```

--

create the implementation file - `sum.js`

```TypeScript=
function sum(a, b) {
    return a + b;
}

module.exports = {
    sum,
};
```

--

### Run the test

```bash
npm test
```

---

### Exercise 1

checkOddEven

--

### Exercise 1

Create a function that accepts Integer `num`.

- Return "odd" if `num` is an odd number.
- Return "even" if `num` is an even number.
- Test atleast negative, zero, and positive inputs.

```TypeScript=
function checkOddEven(num) {
  // Write your function here

}

module.exports = {
  checkOddEven,
};
```

---

### Test with table

--

```JavaScript
test.each([
    [2, 2, 4],
    [4, 5, 9]
])(
    "%d added by %d should be equal to %d",
    (a, b, expectedResult) => {
        expect(a + b).toBe(expectedResult);
    }
);
```

- `%d` - Decimal

--

### Add more test case for exercise 1, using table test.

---

### Testing Exceptions

Don’t forget to test your error cases!

--

```JavaScript
test("input must be a number", () => {
    const input = "satu";

    expect(() => {
        checkOddEven(input);
    }).toThrow("Input must be Integer!");
});
```

--

```TypeScript=
function checkOddEven(num) {
    if (typeof num !== 'number'){
        throw new Error("Input must be Integer!");
    }
    if (num % 2 === 0){
        return "Even";
    }
    return "Odd";
}

module.exports = {
  checkOddEven,
};
```

---

### Checking Code Coverage

```bash
npm test -- --coverage
```
`coverage/lcov-report/index.html`

---

### Exercise 2

dumdam

--

### Exercise 2

Create a function that accepts positive Integer `num`.

- Return "dum" if `num` is divisible by 3.
- Return "dam" if `num` is divisible by 5.
- Return "dumdam" if `num` is divisible by 3 and 5.
- Test atleast negative, zero, and positive inputs.

```TypeScript=
function dumdam(num) {
  // Write your function here

}

module.exports = {
  dumdam,
};
```

---

### Reference

https://www.guru99.com/unit-testing-guide.html
