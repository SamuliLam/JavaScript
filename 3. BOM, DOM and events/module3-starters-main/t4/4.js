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

students.forEach(function (student) {
    document.createElement('option').innerHTML += `<option value="${student.id}">${student.name}</option>`;
}