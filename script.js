let firstNumber = Promise.resolve(105);
let secondNumber = Promise.resolve(-15);

Promise.all([firstNumber, secondNumber]).then((values) => {
    let sum = values.reduce((firstValue, secondValue) => firstValue + secondValue, 0);
    console.log(sum);
});
