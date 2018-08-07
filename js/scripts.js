'use strict'
// let clearBtn = document.querySelector("#clearBtn");
// // let myTimeout;
// let annoyingPopup = () => {
//   alert("HEY!! Have you seen my INSANE and WACKY DISCOUNTS??!?!?!");
// };
// // 
// // function startTimer() {
// //   myTimeout = setTimeout(annoyingPopup, 5000);
// // };
// // 
// // startTimer();
// // 
// // function cancelTimer() {
// //   clearTimeout(myTimeout);
// // };
// // // 
// // let myInterval;
// // 
// // function remindUser() {
// //   alert("Hey, balloons are on SALE!!!!");
// // };
// // 
// // myInterval = setInterval(remindUser, 3000);
// // 
// // function clear() {
// //   clearInterval(myInterval);
// // };
// 
// //TRY IT OUT
// let clearIntervalBtn = document.querySelector("#clearIntervalBtn");
// let clearTimeoutBtn = document.querySelector("#clearTimeoutBtn");
// //1. Write a program that prompts the user for a time (in ms) they want to wait.
// let timeOutAnswer = prompt("How long do you wanna wait?", "5 seconds");
// let intervalAnswer = prompt("How long do you wanna wait in between?", "5 seconds");
// let timeoutReference;
// let intervalReference;
// //2. Take the response and create a setTimeout. After the time expires, alert the user with a random quote.
// let quotes = ["Be kind.", "Stay humble, hustle hard", "Have grit not pride", "Shoot first...always."];
// 
// function createTimer(time, type) {
//   let endIndex = time.indexOf(" ");
//   let parsedTime = parseInt(time.substring(0, endIndex));
//   if(!isNaN(parsedTime)) {
//     parsedTime *= 1000;
//     if(type === "timeout") {
//       timeoutReference = setTimeout(alertRandomQuote, parsedTime);
//     } else if(type === "interval") {
//       intervalReference = setInterval(alertRandomQuote, parsedTime);
//     }
//   } else {
//     // ...
//     console.log("oh no!!");
//   }
// };
// 
// function alertRandomQuote() {
//   let maxIndex = quotes.length - 1;
//   let indexToChoose = Math.floor(Math.random() * maxIndex);
//   alert(quotes[indexToChoose]);
// }
// 
// // createTimer(timeOutAnswer, "timeout");
// //3. Add an interval that prompts for a number of how often the user wants to be alerted and have the message change every time the alert happens. HINT: DO NOT write multiple messages, have JS change it for you.
// createTimer(intervalAnswer, "interval");
// 
// 
// /**
// 4. Create two buttons: one that cancels the timeout, and one that cancels the interval.
// */
// clearIntervalBtn.addEventListener("click", () => {
//   clearInterval(intervalReference);
// });
// 
// clearTimeoutBtn.addEventListener("click", () => {
//   clearTimeout(timeoutReference);
// });

//LOCAL STORAGE/SESSION STORAGE

function storeUserInfo() {
  if(!sessionStorage.getItem("firstName")) {
    let firstName = prompt("what's your first name?");
    sessionStorage.setItem("firstName", firstName);
  }
};

storeUserInfo();

let retrievedValue = sessionStorage.getItem("firstName");
alert(`Hello ${retrievedValue}!`);








//
