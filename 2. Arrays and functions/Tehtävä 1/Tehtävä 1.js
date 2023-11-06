let numbers = [];

for (let i = 0; i < 5; i++) {
    let num = Number(prompt("Anna numero: "));
    numbers.push(num);
}

for (let i = 0; i < numbers.length; i++){
    console.log(numbers[numbers.length - i - 1]);
}