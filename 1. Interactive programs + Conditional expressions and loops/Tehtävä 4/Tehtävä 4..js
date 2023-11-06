let name = prompt("Anna nimesi:");

const randomnumber = Math.floor(Math.random() * 4);
switch (randomnumber) {
    case 0:
        document.querySelector("h1").innerHTML = name + ", you are Gryffindor!";
        break;
    case 1:
        document.querySelector("h1").innerHTML = name + ", you are Hufflepuff!";
        break;
    case 2:
        document.querySelector("h1").innerHTML = name + ", you are Ravenclaw!";
        break;
    case 3:
        document.querySelector("h1").innerHTML = name + ", you are Slytherin!";
        break;
}
