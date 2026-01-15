// main.js

// --------------------------------------------------
// STEP 1: Select DOM elements ONCE
// --------------------------------------------------
// Grab references to the main UI elements.
// These IDs should already exist in index.html.

// TODO: Select the main todo list container
const list = document.querySelector('#todo-list');
// TODO: Select the output area for text and messages
const output = document.querySelector("#output");
// TODO: Select the Run Demo button
const btnRun = document.querySelector("#btn-run");
// TODO: Select the Clear button
const btnClear = document.querySelector("#btn-clear");

// --------------------------------------------------
// STEP 2: Variables and template strings
// --------------------------------------------------
// Create a constant and a variable, then display
// them using a template string.
// TODO: Create a constant named course
const course = "SDEV2150";
// TODO: Create a variable named topic
let topic = "JS Review";
// TODO: Use a template string to display both values
let template = `<p>The course is ${course} and our topic is ${topic}</p>`;
output.innerHTML = template;
// --------------------------------------------------
// STEP 3: Functions and return values
// --------------------------------------------------
// Write a function that adds two numbers and
// another function that formats a label/value pair.

// TODO: Create a function add(a, b)
function add (a, b) {
    return a + b;
}
// TODO: Create an arrow function formatResult(label, value)
const formatResult = (label, value) => {
    return `<p>${label}: ${value}</p>`;
}
// TODO: Call the functions and display the result
output.innerHTML += formatResult('Love', add(1, 3))
// --------------------------------------------------
// STEP 4: Arrays, objects, and iteration
// --------------------------------------------------
// Create an array of task objects and count
// how many are marked as done.

// TODO: Create an array named tasks
// Each task should have: title (string), done (boolean)
let tasks = [
    { title: "Install Dependencies", done: true }, 
    { title: "Run Dev Server", done: true }, 
    { title: "Complete Review Demo", done: false }
]
// TODO: Use a loop to count completed tasks
let count = 0
for (const task of tasks) {
    if (task.done) count++;
}

// TODO: Display: "Completed: X of Y"
output.innerHTML += `<p>Completed: ${count}/${tasks.length}</p>`
// --------------------------------------------------
// STEP 5: Problem solving – build HTML from data
// --------------------------------------------------
// Build a function that converts the tasks array
// into an HTML list using a loop.

// TODO: Create a function renderTaskList(items)
// - Start with '<ul>'
// - Loop over items
// - Add <li> elements with a class of 'done' or 'todo'
// - Close the list and return the string
function renderTaskList(items) {
    list.textContent = '';
    list.appendChild(document.createElement('ul'))
    items.forEach(element => {
        list.lastChild.innerHTML += `<li>${ element.title }: ${ element.done ? "Done" : "To-do" }</li>`  
    });
}
// TODO: Render the task list inside the list container
renderTaskList(tasks);
// --------------------------------------------------
// STEP 6: DOM manipulation with createElement
// --------------------------------------------------
// Create and append elements instead of using innerHTML.

// TODO: Create a function addMessage(message)
// - Create a <p> element
// - Set its textContent
// - Append it to the output element
function addMessage(message) {
    output.appendChild(document.createElement('p')).append(message);
}

// TODO: Test the addMessage function
addMessage("Let's go Canto 9 Part 3! :D")
// --------------------------------------------------
// STEP 7: Events – connect UI to behavior
// --------------------------------------------------
// Wire the buttons to functions that update the UI.

// TODO: Create a function runDemo()
// - Clear output
// - Add a few messages
// - Render the task list
function runDemo() {
    output.textContent = ''
    addMessage('Canto 9 Part 3! :D');
    addMessage('Great Trillochism!');
    addMessage('RYOSHU gaming!');
    renderTaskList(tasks);
}

// TODO: Create a function clearUI()
// - Clear both output and todo list containers
function clearUI() {
    output.textContent = '';
    list.textContent = '';
}
// TODO: Add click listeners for btnRun and btnClear
btnRun.addEventListener('click', runDemo);
btnClear.addEventListener('click', clearUI);
// --------------------------------------------------
// STEP 8: Mini extension – Adding tasks
// --------------------------------------------------
const btnAdd = document.querySelector('#btn-add');
const txtTask = document.querySelector('#txt-task')

btnAdd.addEventListener('click', () => {
    const title = txtTask.value.trim();
    if (!title) return;
    tasks.push( { title: title, done: false } );
    renderTaskList(tasks);
    txtTask.value = '';
})
// --------------------------------------------------
// STEP 9: Student Exercise
// --------------------------------------------------
// Complete these AFTER the demo:

// 1. Create a function toggleDone(title)
//    - Find a task by title
//    - Flip its done value (true/false)

// 2. Update renderTaskList() to show '(done)' or '(todo)'

// 3. Add event delegation to the <ul>
//    - When a list item is clicked:
//      * Toggle the task
//      * Re-render the list

// 4. Stretch goals:
//    - Display a chekcbox next to each task to represent done/todo 
//      (checking/unchecking it toggles the state)
//    - Update the UI so that pressing enter in the text input adds 
//      the task (notice we aren't using a form
//    - Display a summary line above the list
//      e.g. "Completed: 2 of 3"
