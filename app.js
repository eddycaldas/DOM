let val;

val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype; 
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;

val = document.links;
val = document.links[0];
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');


// forEach only work arrays only so convert into array tqake the scripts create a variable and pass the html collection

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
    console.log(script.getAttribute('src'))
});



console.log(val);


// DOM selectors--------------------------SINGLE ELEMENTS-------------------------------------------->

// document.getElementById()
console.log(document.getElementById("task-title"));
console.log(document.getElementById("task-title").id);

document.getElementById("task-title").style.background = '#333';
document.getElementById("task-title").style.color = '#fff';
document.getElementById("task-title").style.padding = '#5px';

const taskTitle = document.getElementById("task-title");
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My tasks';
taskTitle.innerHTML = '<span style="color:red">Task List</span'

// querySelector
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));

document.querySelector('li').style.color = "red";

document.querySelector('li:last-child').style.color = 'green';
document.querySelector('li:nth-child(3').style.color = 'blue';
document.querySelector('li:nth-child(3').textContent = 'Hello There!!!!'

// DOM selectors--------------------MULTIPLE ELEMENTS-------------------------------------------------->

const items = document.getElementsByClassName('collection-item'); //its on global scope
console.log(items);
console.log(items[0]);
items[0].style.color = 'yellow';
items[3].textContent = 'hello';

const listItems = document.querySelector('ul')
.getElementsByClassName('collection-item'); // collection only of those ones insode th e 'ul'

console.log(listItems);

// convert html collecti  into array
let lis = document.getElementsByTagName('li');
lis = Array.from(lis)

lis.reverse();
lis.forEach(function(li, index){
    li.textContent = `${index}: Hello!!`;
});
console.log(lis);

// document.querySelectorAll this ones is a node collection - sont need to convert it into an array
const items2 = document.querySelectorAll('ul.collection li.collection-item');

items2.forEach(function(item, index){
    item.textContent = `${index}: hi hi hi`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd');
const liEven = document.querySelectorAll('li:nth-child(even');

liOdd.forEach(function(li, index){
    li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){
    liEven[i].style.background = '#f4f4f4';
}

console.log(items2);