
const userinput = prompt("Anna vuosi: ");

if (userinput % 4 === 0) {
    document.querySelector("h1").innerHTML = "Vuosi on karkausvuosi!";
} else if (userinput % 100 === 0){
    if (userinput % 400 === 0) {
        document.querySelector("h1").innerHTML = "Vuosi on karkausvuosi!";
    }
} else {
    document.querySelector("h1").innerHTML = "Vuosi ei ole karkausvuosi!";
}