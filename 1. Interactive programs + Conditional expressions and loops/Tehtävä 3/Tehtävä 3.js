const num = Number(prompt("Give a number:"));
const num2 = Number(prompt("Give another number:"));
const num3 = Number(prompt("Give a third number:"));

const sum = num + num2 + num3;
const product = num * num2 * num3;
const average = sum / 3;


document.querySelector("p").innerHTML = "The sum is: " + sum + " The product is: " + product + " The average is: " + average + "";
