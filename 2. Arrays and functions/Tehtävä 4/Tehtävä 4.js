let numbers = [];
let number;

do {
    number = Number(prompt("Give a number:"))
    numbers.push(number)
} while (number !== 0);


numbers.sort((a, b) => b - a);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}