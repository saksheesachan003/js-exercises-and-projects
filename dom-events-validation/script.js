// ********************************************* THE DOM *****************************************************

///////////////// Element Selection --------------------------------
//  1. document.querySelector() -> selects class, tag, attribute, id
   // used to pick the first element
//  2. document.getElementById() -> selects by id
//  3. document.getElementsByClassName() -> selects by class
//  4. document.querySelectorAll() -> selects all matching elements and return them in NodeList

/// selecting through "id"
let abcd = document.getElementById("abcd");
console.log(abcd); // shows in tag
console.dir(abcd);  // show in node tree ( opening tree)

/// selecting through "class" ( returns array like structure, not array)
let efgh = document.getElementsByClassName("abcd");
console.log(efgh); 
console.dir(efgh);

/// selects first matching element
let h2 = document.querySelector("h2");
console.dir(h2)

/// selects all matching elements , returns array like structure
let h2_all = document.querySelectorAll("h2");
console.dir(h2_all); // returns array like structure



///////////////// Content Modification --------------------------------
// 1. innerText() -> changes the text 
// 2. textContent() -> changes the text
// 3. innerHTML()  -> insert actual HTML Tags ( like <b> or <i> ) rather than plain text 


let h1 = document.querySelector("h1");
console.dir(h1); // can see text in innerHTML, innerText and textContent
// h1.textContent = "Hello, Badhiya hu!" // can use innerText, innerHTML as well
h1.innerHTML = "<i>Hello, Badhiya hu!</i >"  // now in italic
// h1.hidden = true;  // hide the h1 ( manipulated the DOM)



///////////////// Attribute Manipulation --------------------------------
// 1. getAttribute() -> retrieve a value (pass "value")
// 2. setAttribute() -> update or add one ( pass "name" and "value")
// 3. removeAttribute() -> delete an attribute entirely

let a = document.querySelector("a");
// a.href = "https://www.google.com";
console.dir(a);

a.setAttribute("href", "https://www.google.com");

let img = document.querySelector("img");
console.dir(img);
img.setAttribute("src", "https://images.unsplash.com/photo-1774275979685-545e62da5438?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D")

let b = document.querySelector("b");
console.log(b.getAttribute("href"));

a.removeAttribute("href");


///////////////// Dynamic DOM Manipulation --------------------------------
// 1. createElement() -> Generate a new node ( like <div> or <h1> )
// 2. appendChild() -> Add an element to the end of parent element
// 3. prepend() -> add an element to the beginning of parent element
// 4. removeChild() -> Remove an element from the DOM


// in html file there is no h3 tag, but from here created h3 tag
let h3 = document.createElement("h3"); // creates blank h3 tag
h3.textContent = "Hello Guys!"; // insert text in h3 tag

document.querySelector("body").appendChild(h3); // end
// document.body.prepend(h3); // beginning

// document.querySelector("body").removeChild(h3); // remove

// h1.remove(); // removes element from dom (body)

let h4 = document.createElement("h4");
h4.textContent = "mai bahar se aaya hu";
document.querySelector("div").append(h4);




///////////////// Styles Updates --------------------------------
// 1. .styles
// 2. classList(add, remove, toggle method)

/// .styles -> can chage css using style
let h5 = document.querySelector("h5");
console.dir(h5);  // there is a "style" section
h5.style.color = "red"
h5.style.backgroundColor = "yellow"
h5.style.fontFamily = "Gilroy"
h5.style.textTransform = "capitalize"

/// classList -> how to add class and remove from JS
let h6 = document.querySelector("h6");
console.dir(h6); // in "classList" section can see classes how many attached

h6.classList.add("ijkl") // add class
h6.classList.remove("ijkl") // remove class
h6.classList.toggle("ijkl") // toggle class ( if remove then add, if add then remove)












