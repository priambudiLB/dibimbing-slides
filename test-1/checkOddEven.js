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