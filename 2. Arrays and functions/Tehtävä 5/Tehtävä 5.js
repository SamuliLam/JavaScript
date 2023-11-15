let number = Number(prompt("Give a number:"));
let numbers = [];

while (!numbers.includes(number)) {
    numbers.push(number);
    number = Number(prompt("Give a number:"));
}

console.log("You gave the number " + number + " twice.");
console.log(numbers.sort((a, b) => a - b));

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
