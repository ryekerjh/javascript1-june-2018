//QUERYING THE DOM
const body = document.getElementsByTagName("body"); //grabs by name of the tag (returns an ARRAY)
// console.log(body[0]);
const header = document.getElementsByClassName("heading"); //grabs by class name (returns an ARRAY)

const paragraph = document.getElementById("paragraph1"); //grabs single element by id (returns ONE ELEMENT)
// console.log(paragraph);

//QUERYSELECTOR
// let div = document.querySelector("div"); // by tag
// let div = document.querySelector(".my-div"); //by class
let div = document.querySelector("#beth_is_the_worst"); // Grabs FIRST instance of whatever you are querying for (works on tag, class or id)

//QUERYSELECTORALL
let h1s = document.querySelectorAll("h1"); //grabs by id, class or tagname (returns an ARRAY of all matches)
//let h1s = document.querySelectorAll(".my-h1");
// let h1s = document.querySelectorAll("#this_h1");


div.addEventListener(
  "mouseover",
  ev => { //ES6 way to write callback. Callback is a function that will be run later (or "called back") by JavaScript.
    // console.log(ev); //This is the event itself(in this case, a mouseover event)
    div.style.backgroundColor = "indigo"; //Change the background color of the div when the user moves their mouse over it.
  }
  
  // function(ev) { //ES5 way to write callback(don't do that)
  //   div.style.backgroundColor = "indigo";
  // }
);

//TRY IT OUT 
/*
On your day6 branch, create a basic HTML mockup with a button, a div with some height and background color, and an h1 with some text
Create event listeners for each:
1. For the button, alert the user with a message when they click it.*/
let myBtn = document.querySelector(".my-btn");
myBtn.addEventListener("click", e => {
  alert("Hey, you clicked me!!");
});
/*
2. For the div, change the color of the background when their mouse goes into the div.*/
const colors = ["red", "blue", "purple", "yellow", "green", "black"];

function getRandomColor(colorsArray) {
  return colorsArray[Math.floor(Math.random() * Math.floor(colorsArray.length))];
};

let myDiv = document.querySelector("#wrapper");
myDiv.addEventListener("mouseenter", e => {
  myDiv.style.backgroundColor = getRandomColor(colors);
});
/*
For the h1, change the color of the text the user releases any key.*/

/*
Not Tough Enough? Try redirecting the user's browser to facebook when the click anywhere on the page.
*/
