let myArray = []; //MOST basic form of myArray
let favoriteFoods = ["pizza", "hamburgers", "french fries"];
let allTheThings = ["string", 23, ["stuff"], {}, false];

console.log(favoriteFoods[1]); //prints "hamburgers"

// alert(favoriteFoods.length); //gives you how many members are in array 

//TRY IT OUT #1
let myFavs = ["Captain America: Civil War", 42, true, 2004];
// console.log(myFavs, myFavs.length);

// Check if this is an array
console.log(Array.isArray(myFavs), typeof myFavs);
console.log(myFavs);
myFavs.push("Maggie Gyllenhaal"); //Changes the value of original
console.log(myFavs);
 
 // UNSHIFT
myFavs.unshift("Faith Herndon"); //Adds "Faith Herndon" to beginning of array
console.log(myFavs);

// POP
myFavs.pop();
console.log(myFavs);

// SHIFT 
myFavs.shift(); //REMOVES the first member of the array.
console.log(myFavs);

//SPLICE 
let removed = myFavs.splice(2); //1 argument: BEGINNING with that index, removes ALL indices after
console.log(myFavs, removed);
console.log(myFavs, 'BEFORE');
myFavs.splice(1, 2); //2 arguments: Starting at the first number (index) and INCLUDING it, remove the second number amount of items(count).
console.log(myFavs, 'AFTER');

console.log(myFavs, 'BEFORE');
myFavs.splice(3, 1, ["I got added!"], 'CHEESE', 23); //3 args: starting at 3, remove 1 things, and then add my array
console.log(myFavs, 'AFTER');

myFavs.splice(-3, 1); //If negative num is 1st argument, starts at the END of the array and counts back to that spot.
// 


//SLICE
let copy = myFavs.slice(); //Makes a copy of the entire array
let endCopy = myFavs.slice(2); //Makes a copy starting at index 2, and going to the end.
let shortCopy = myFavs.slice(1, 4); //Makes a copy starting at index 1 and includeing everything UNTIL (but NOT including) index 4
// console.log(copy, myFavs);


//IndexOf/lastIndexOf
// let removeIndex = myFavs.indexOf(42); //returns the index of 42 in our myFavs array
// console.log(removeIndex);
// myFavs.splice(removeIndex, 1);
//lastIndexOf does the same thing but gives you teh LAST index of that thing.

//REVERSE
// let myNums = [1, 2, 3, 4, 5];
// console.log(myNums.reverse()); //Reverses the original array
// console.log(myNums);

//SORT
// console.log(myFavs);
// myFavs.sort(); //Organizes by alpha-numeric order
// console.log(myFavs);

let multiDimensional = [['hello', 1], ['goodbye', 0]];

// console.log(multiDimensional[0][1], multiDimensional[1][1]);

// TRY IT OUT #2
let favMovies = [];
let favorite = ["Star Wars: The Motion Picture", "Han Solo"];
let secondFav = ["Boondock Saints", "The twins"];
let thirdFav = ["Return of the King", "Aragorn"];
let fourthFav = ["Stay", "Ryan"];
let fifthFav = ["5th Element", "Corbin"];


/*
1. Add all of these arrays to a final array named favoriteMovies
*/
favMovies.push(favorite, secondFav, thirdFav, fourthFav, fifthFav);
console.log(favMovies);
/*
2. Create an array with just the titles of your favorite movies and alert it
*/
let titles = [];
titles.push(favMovies[0][0], favMovies[1][0], favMovies[2][0]);
// alert(titles);
/*
3. Create another array with your favorite and least favorite of the top 5 and console.log it.
*/

let favAndLeast = [];
favAndLeast.push(favMovies[0], favMovies[4]);
// console.log(favAndLeast);
/*
4. Check the length of your favoriteMovies array by alerting it.
*/
// alert(favMovies.length);

// LOOPS...ARE GREAT
for (let i = 0; i < favMovies.length; i++) {
  if(favMovies[i][0] === "Stay") alert(`${favMovies[i][0]} ${favMovies[i][1]}`);
}
