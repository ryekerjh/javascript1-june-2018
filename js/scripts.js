let name = prompt('What is your name?');
let favColor = prompt("Tell me your favorite color", "Please use one of the following: blue, red...");

if(name && name.length > 4) {
  switch(favColor.toLowerCase()) {
    case 'blue': 
      alert(`Hey ${name}, ${favColor} is the best color!!`);
      break;
    // ...
    default:
      alert(`You didn't give me a valid color!!`);
  } else {
    alert('You suck!');
  } 
}
