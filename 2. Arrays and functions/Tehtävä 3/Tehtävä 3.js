let dogs = [];
for (let i = 0; i < 6; i++){
    const dog = prompt("Give a dog's name: ");
    dogs.push(dog);
}

dogs.sort().reverse();
for (let i = 0; i < dogs.length; i++){
    document.querySelector("ul").innerHTML += "<li>" + dogs[i] + "</li>";
}