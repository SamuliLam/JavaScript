const choice = confirm("Should I calculate the square root?");

if (choice) {
    const squarer = Math.sqrt(prompt("Give me a number: "))
    if (squarer < 0) {
        document.querySelector("h1").innerHTML = "The square root of a negative number is not defined";
    }else {
        document.querySelector("h1").innerHTML = "The square root of the number is " + squarer;
    }
} else {
    document.querySelector("h1").innerHTML = "The square root is not calculated.";
}