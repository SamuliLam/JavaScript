const startyear = Number(prompt("Anna aloitusvuosi: "));
const endyear = Number(prompt("Anna lopetusvuosi: "));


for (let leapyear = startyear; leapyear < endyear; leapyear++) {
    if (leapyear % 4 === 0) {
        // I want to print the leapyear to the list
        document.querySelector("ul").innerHTML += "<li>" + leapyear + "</li>";

    } else if (leapyear % 100 === 0) {
        if (leapyear % 400 === 0) {
            document.querySelector("ul").innerHTML += "<li>" + leapyear + "</li>";
        }
    }
}

