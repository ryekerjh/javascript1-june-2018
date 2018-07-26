//MORE DOM STUFF!!!!
const div = document.querySelector(".myDiv");
const trekkies = "https://cdn.player.one/sites/player.one/files/styles/lg/public/2016/02/01/enterprise-star-trek.jpg";
let image = document.querySelector("img");
// console.log(div.textContent); //Returns text (only) in ALL children
// div.textContent = "Say cheese and die!!!"; //RESET the value of the text inside an element!

// console.log(div.innerHTML);

// div.innerHTML = "<h1>Hey there, R.L. Stein. Did you die in the 90s?</h1>";

let newH1 = document.createElement("h1");
newH1.textContent = "I am the greatest...I...I...";
// newH1.id = "red_bg"; //set an id explicitly
div.appendChild(newH1); //Always adds AFTER the last element in the parent

let newH2 = document.createElement("h2");
newH2.textContent = "I am before the h1!!";
newH2.className = "blue-bg";
newH2.className += " white-text"; //WORKAROUND for adding additional classes.
div.insertBefore(newH2, newH1);


let newP = document.createElement("p"); //Creates an element
newP.textContent = "I am a squirrel...";
newP.classList.add("purple-text", "green-bg");
div.appendChild(newP);

let span = document.querySelector("span");
span.addEventListener("mouseenter", (e) => {
  span.classList.remove("white-text");
  //...toggle
  span.addEventListener("mouseleave", (e) => {
    // ...toggle
  });
});

span.addEventListener("click", (e) => {
  span.classList.toggle("giant-text");
  span.classList.contains("green-bg") ? span.classList.replace("green-bg", "blue-bg")
  :
  span.classList.replace("blue-bg", "green-bg");
});

image.addEventListener('click', (e) => {
  image.setAttribute("src", trekkies);
})


















//
