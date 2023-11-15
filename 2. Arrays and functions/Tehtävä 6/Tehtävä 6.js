
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function main() {
    let result = 0;
    let ul = document.createElement('ul');
    document.body.appendChild(ul);
    while (result !== 6) {
        result = rollDice();
        let li = document.createElement('li');
        li.innerHTML = result;
        ul.appendChild(li);
    }
}

main();