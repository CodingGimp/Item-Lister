// TRANVERSING THE DOM //
// parentNode
// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';

// parentElement
// var itemList = document.querySelector('#items');
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';

// //childNodes
// console.log(itemList.childNodes);

// firstChild
// console.log(itemList.firstChild);

// var newDiv = document.createElement('div');

// newDiv.className = 'hello';

// newDiv.id = 'hello1';

// newDiv.setAttribute('title', 'Hello Div');

// var newDivText = document.createTextNode('Hello World');

// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// newDiv.style.fontSize = '2.5rem';

// container.insertBefore(newDiv, h1);

// var button = document.getElementById('button').addEventListener('click', boom);

// function boom() {
//     console.log("BOOM");
// }

// var button = document.getElementById("button");
// var box = document.getElementById("box");

// button.addEventListener('click', runEvent);
// button.addEventListener("dblclick", runEvent);
// button.addEventListener("mousedown", runEvent);
// button.addEventListener("mouseup", runEvent);

// box.addEventListener("mouseenter", runEvent);
// box.addEventListener("mouseleave", runEvent);


// box.addEventListener("mouseover", runEvent);
// box.addEventListener("mouseout", runEvent);

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');

// itemInput.addEventListener('keydown', runEvent)

// function runEvent(e) {
//   console.log("EVENT TYPE: " + e.type);
// //   output.innerHTML = '<h3>MouseX: ' + e.offsetX + ' </h3><h3>MouseY: ' + e.offsetY + '</h3>';
// }
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event listener
form.addEventListener('submit', addItem);

// List item delele event listener
itemList.addEventListener('click', removeItem)

// Filter event listener
filter.addEventListener('keyup', filterItems);

// Add Item Event
function addItem(e) {
  e.preventDefault();

  // Get input value 
  var newItem = document.getElementById('item').value;

  // Create new line element 
  var li = document.createElement('li');

  // Add class
  li.className = 'list-group-item';

  // Add text node with input value 
  li.appendChild(document.createTextNode(newItem));

  // Append li to list
  itemList.appendChild(li);

  // Create delete button element 
  var delButton = document.createElement('button');

  // Add classes to del button 
  delButton.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  delButton.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(delButton);
}

// Remove Item Event 
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Item Event 
function filterItems(e) {
  // Convert text to lowercase 
  var text = e.target.value.toLowerCase();

  // Get lis
  var items = itemList.getElementsByTagName('li');

  // Convert lis to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;

    // Check if search input matches list items 
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';      
    } else {
      item.style.display = 'none';
    }
  })
}  