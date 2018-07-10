//...
let birthday = new Date(prompt('What is your birthday?', "5/21/1986"));

let confirmBday = confirm(`Is ${birthday} your correct birthday?`);

if(confirmBday) alert(`${birthday} is in fact your birthday!`);
