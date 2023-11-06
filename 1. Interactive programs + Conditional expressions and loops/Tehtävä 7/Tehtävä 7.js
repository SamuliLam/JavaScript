const dienum = Number(prompt("How many dice do you want to roll?"));

let sum = 0;


for (let i = 0; i < dienum; i++){
    const dice = Math.floor(Math.random() * 6) + 1;
    sum += dice;
}
document.querySelector("h1").innerHTML = "You rolled " + dienum + " dice. Their sum is " + sum + ".";

