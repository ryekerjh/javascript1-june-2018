let loginForm = document.forms.login;
let emailInput = loginForm.email;
let passwordInput = loginForm.password;

function listItems(pet) {
  console.log(this);
  alert(`${this.name} loves ${this.favorites[0]} and has a ${pet}.`);
};

emailInput.addEventListener("keyup", e => {
  console.log(this); //What key did they hit?
  e.target.value //What is getting typed in
});

loginForm.addEventListener("submit", e => { //Submit event type only valid on FORMS
  e.preventDefault(); //stops default action of event
  //...do some checks, submit the form, etc
  loginForm.reset(); //Clear inputs on form
});

//THIS
// this.favorites = ["pickles"];

// function listItems(pet) {
//   console.log(this);
//   alert(`${this.name} loves ${this.favorites[0]} and has a ${pet}.`);
// };

//THIS will always default to the window unless we change its definition
let user = {
  name: "Ryeker",
  cart: [],
  coupons: [],
  favorites: ["cheese"],
  listFavorites: listItems //IMPLICITLY BINDS "THIS"
};

//IMPLICIT "THIS" BINDING
// user.listFavorites(); //call site
//log out: Ryeker loves cheese;

//EXPLICIT BINDING
let jr = {
  name: "Junior Royce?",
  cart: ["guns n roses"],
  coupons: [1.99],
  favorites: ["Star Wars"]
};

// listItems.call(jr, "dog"); //Rule 1 about call is it must be called on a FUNCTION
//Rule 2 for call is if the function being bound requires Arguments, they begin as the SECOND argument of call()

//APPLY
// listItems.apply(jr, ["cat"]);







//
