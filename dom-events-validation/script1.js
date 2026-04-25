// ********************************************* THE DOM Practice Question *****************************************************

//// Ques 1: what is DOM? How does it represent the HTML structure?
// DOM ( document object model) is a tree like structure, everything is in body a DOM


//// Ques 2: Names the types of nodes in the DOM tree?
// element, text and comment


//// Ques 3: what's the difference between an element node and a text node ?
// <p> tag is element node, under tag, content is text node


//// Ques 4: Inspect the following HTML in the browser and identify each node:


//// Ques 5: what is difference b/w getElementByID and querySelector?
console.log(document.getElementById("apple")); // no need to add "#"
console.log(document.querySelector("#apple"))  // for id, "#" before id name


//// Ques 6: what does getElementsByClassName return? Is it an array?
// returns a HTMLCOllection, which similars to array but not an array 


//// Ques 7:  Use querySelectorAll to select all buttons with class ".buy-now"
let buy = document.querySelectorAll(".buy-now");
console.dir(buy)


//// Ques 8: what's difference b/w innerText, textContent and innerHTML
// innerText & textContent -> change sthe text of under element node (tag)
// innerHTML -> puts HTMl tag inside text


//// Ques 9: when should you use textContent instead of innerText?
// innerText -> hidden text can't be chage ( only visible text can be change)
// textContent -> all text change ( also include hidden)


//// Ques 10: How do you get the src of an image using JavaScript?
// Using getAttribute("name")


//// Ques 11: what does setAttribute() do?
// setAttribute changes the attributre of any element 
// setAttribute("name", "value")


//// Ques 12: what does the createElement() do? what's returned?
// create an element which you passed, and return HTML Node
// document.createElement("h2") -> creates h2 elememt


//// Ques 13: What's difference between appendChild() and prepend()
// appendChild() -> Adds an element in the end of parent
// prepend() -> Adds an elemnt in the beginning of parent


//// Ques 14: Can you remove an elemt using removeChild() ?
// yes, we can remove element from parent
// document.querySelector("div").removeChild(elementNode)


//// Ques 15: How do you change the background color of an element?
// element.style.backgroundColor = "color_name";


//// Ques 16: What's difference b/w .classList.add() and .classList.toggle() ?
// .classList.add() -> adds the classname
// .classList.toogle() -> switch between add and remove



//// Task1: Select the heading of page by ID and change it's text to "Welcome Home".
let h1 = document.querySelector("h1");
h1.textContent = "Welcome Home";


//// Task 2: Select all <li> elements and print thier text using a loop
let lis = document.querySelectorAll("li");
// for(let i = 0; i < lis.length; i++){
//     console.log(lis[i].textContent)
// }

// for (let li of lis) {
//     console.log(li.textContent)
// }

lis.forEach(li => {
    console.log(li.textContent)
})


//// Task 3: Select a paragraph and replace its content with:
{/* <b>Updated</b> by JavaScript */}
let para = document.querySelector("p");
para.innerHTML = "<b>Updated</b> by JavaScript";


//// Task 4: Select a link and update its href to point to "https://linkedin.com"
let a = document.querySelector("a");

//// 1st method -> using dot
// a.href = "https://linkedin.com";

//// 2nd method -> using setAttribute
a.setAttribute("href", "https://linkedin.com")


//// Task 5: Add a title attribute to div dynamically
let div = document.querySelector("div");
div.setAttribute("title", "Some Info")


//// Task 6: Remove the disabled attribute from a button
let btn = document.querySelector("button");
btn.removeAttribute("disabled")


//// Task 7: List item <li>New Task</li> and add it to the end of a <ul>.
let ul = document.querySelector("ul");
let li = document.createElement("li");
li.textContent ="New Task";
ul.appendChild(li);


//// Task 8: Create a new image element with a  placeholder source and add it at the top of a div
let img = document.createElement("img");
img.setAttribute("src",
     "https://images.unsplash.com/photo-1762138012600-2ab523f8b35a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8")
  
// controlled width and height using classList
img.classList.add("placeholder")

// Img placed top to div
document.querySelector("div").prepend(img);


//// Task 9: Select the first item in a list and delete it from the DOM.
let lif = document.querySelector("li"); // selects first matching li element

/// using removeChild -> removes selected li element
ul.removeChild(lif);

/// using firstElementChild -> removes first element
// ul.removeChild(ul.firstElementChild);


//// Task 10: Add a highlight class to every even time in a list.

// using nth-child -> Every 2nd child should choose
let lie = document.querySelectorAll("ul li:nth-child(2n)");
console.log(lie);

lie.forEach(function (elem) {
    elem.classList.add("highlight");
})

// using elem % 2 === 0 -> returns even number
// document.querySelectorAll("li").forEach((li, index) => {
//     if(index % 2 === 0){
//         li.classList.add("highlight")
//     }
// })


//// Task 11: Toggle a class active on a button when clicked (Hint: Use classList.toggle())
// Using addEventListener(action, func) -> can solve using this


//// Task 12: Set the font size of  <p> elements to 18px using .style
let p = document.querySelectorAll("p");
p.forEach((elem) => {
    elem.style.fontSize = "18px";
})


