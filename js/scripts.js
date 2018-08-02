//PROTOTYPE INHERITANCE
let sentence = new String("Ann went walking one day.");
let number = new Number(32);
// console.log(Object.getPrototypeOf(number));

let dude = { //Most basic way to create an object
  catchPhrase: "Where's my car?", //KEY : VALUE pair, which makes a PROPERTY
  firstName: "Big",
  lastName: "Lebowski",
  age: Infinity
};
// console.log(Object.getPrototypeOf(dude)); //OBJECT

function User(name, email, password, favorites, cart) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.favorites = favorites;
  this.cart = cart;
}; //4th way to bind THIS

User.prototype.calculateCartTotal = function() {
  let total = 0;
  this.cart.forEach(item => {
    total += item.price;
  });
  return total;
};

let cody = new User("Cody", "code-man-5000@gmail.com", "123456", [], []);
// console.log(cody);
// console.log(Object.getPrototypeOf(cody));
let ryeker = new User("Ryeker", "best_teach@truth.com", "11111", [], []);
ryeker.isAdmin = true; //dot notation
ryeker["isAdmin"] = false //bracket notation
// ryeker["42"] = false;

console.log(ryeker, cody);

//TRY IT OUT: build a new user with data collected from a form in HTML and your user PROTOTYPE
const userForm = document.forms.userForm;

userForm.addEventListener("submit", e => { //Submit event listens to the ENTIRE form (inputs and all)
  e.preventDefault(); //Prevent the submission of the form FIRST
  let newUser = new User(userForm.name.value, userForm.email.value, userForm.password.value, [], []);
  console.log(newUser);
  userForm.reset();
});











//
