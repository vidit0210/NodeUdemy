//UnderStanding Call back;

let add = (a, b) => {
    return a + b;
}
let multiply = (a, b) => {
    return a * b;
}

function cal(num1, num2, calback) {
    return calback(num1, num2)
}
console.log(cal(3, 5, add))