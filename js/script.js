

console.log("-------------------- [Question 1] ---------------------------");
// Question 1:
// Create an object called cat.
// Give the object one property called complain. 
//complain's value should be a method (a function) which logs the string "Meow!".

const cat = {
    complain: "Meouw!",
    myMethod: function () {
        return this.complain;
    } 
}
console.log(cat.complain);

console.log("-------------------- [Question 2] ---------------------------");
// Question 2:
// Select the h3 from the HTML using the querySelector method and assign it to a variable called heading.
// Change its innerHTML value to "Updated heading".

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";


console.log("-------------------- [Question 3] ---------------------------");
// Question 3:
// Use the style property on the heading variable from the question above to change its font size to "2em".

heading.style.fontSize = "2em";

console.log("-------------------- [Question 4] ---------------------------");
// Question 4:
// Add a class to the heading variable called subheading.

heading.classList.add("subheading");


console.log("-------------------- [Question 5] ---------------------------");
// Question 5:
// Write code that selects all the p elements on a page and assigns them to a variable called paragraphs.
// Loop through the p elements and change the colour of each to "red".

// const paragraphs = document.querySelector("p");
// paragraphs.style.color = "red";

const paragraphs = document.querySelectorAll("p");

    for(let i = 0; i < paragraphs.length; ++i){
        paragraphs[i].style.color = "red"
    }

console.log("-------------------- [Question 6] ---------------------------");
// Question 6:
// Select the div with a class of results, assign it to a variable called resultsContainer 
// and set its inner HTML to be <p>New paragraph</p> and its background colour to be yellow.
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

console.log("-------------------- [Question 7] ---------------------------");
// Question 7:
// Create a function that has one parameter called list.
// Inside the function, loop through the list parameter and console log the name property in each object.
// Call the function and pass in the cats variable in the script.js file in the repo.
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];
function list() {
    for(let i = 0; i < cats.length; i++) {
        console.log(cats[i].name);
    }
}
list();


console.log("-------------------- [Question 8] ---------------------------");
// Question 8:
// Create a function called createCats. The function will have one parameter called cats.
// Inside the function loop through the value passed in as cats and create HTML for each object in the array.
// Wrap each item in a div, each name property in an h5 tag and each age property in a p tag.
// If the age property is missing, it should display “Age unknown” instead.
// Return the HTML from the function.
// Call the function and pass in the cats array as the argument.
// Assign the return value of the function to the innerHTML property of the element on the HTML page with a class of cat-container.

  function createCats(cats) {
    let html = "";
    for (let i = 0; i < cats.length; i++) {
      let objUnknown = "Age Unknown";
      if (cats[i].age) {
        objUnknown = cats[i].age;
      }
      html += document.querySelector(".cat-container").innerHTML += `<div> <h5>${cats[i].name}</h5><p>${objUnknown}</p></div>`;
    }
    return html;
  }
  createCats(cats);