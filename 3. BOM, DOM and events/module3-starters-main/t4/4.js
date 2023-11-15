'use strict';
/*Open t4 folder in your IDE/editor. Add HTML by using createElement() and appenChild mehtods. (2p)
Add the following HTML code to the element with id="target". Add the values from 'students' array to the <option> elements in a for-loop. */
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const target = document.getElementById('target');

for (let student in students) {
    let option = document.createElement('option');
    option.value = students[student].id;
    option.innerHTML = students[student].name;
    target.appendChild(option);
}
