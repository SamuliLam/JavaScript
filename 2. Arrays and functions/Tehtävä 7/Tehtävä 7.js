let userinput = Number(prompt("Give a number of sides for a dice:"));
function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function main() {
    let result = 0;
    let ul = document.createElement('ul');
    document.body.appendChild(ul);
    while (result !== userinput) {
        result = rollDice(userinput);
        let li = document.createElement('li');
        li.innerHTML = result;
        ul.appendChild(li);
    }
}

main();