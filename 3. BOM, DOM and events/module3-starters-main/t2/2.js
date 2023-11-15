const target = document.getElementById("target");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");

li1.innerHTML = "First item";
li2.innerHTML = "Second item";
li3.innerHTML = "Third item";

li2.className = "my-item";

target.appendChild(li1);
target.appendChild(li2);
target.appendChild(li3);



