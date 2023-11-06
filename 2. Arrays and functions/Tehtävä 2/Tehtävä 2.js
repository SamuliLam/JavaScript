const participants = Number(prompt("How many participants?"));

let names = [];

for (let i = 0; i < participants; i++){
    let name = prompt("Give a name: ");
    names.push(name);
}

names.sort();
names.forEach(name => {document.querySelector("ol").innerHTML += "<li>" + name + "</li>"})