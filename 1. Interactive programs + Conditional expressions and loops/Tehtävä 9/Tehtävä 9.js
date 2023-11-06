const number = Number(prompt("Anna numero: "));


for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        document.querySelector("h1").innerHTML = number + " ei ole alkuluku.";
        break;
    }
    document.querySelector("h1").innerHTML = number + " on alkuluku.";
}