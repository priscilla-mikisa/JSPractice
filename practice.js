// What Javascript statement in place of "?" will make the result always be between 6 and 7?
//  const x = 2; 
//  let y = 4;
//  function update(arg) { 
//    return Math.random() + y * arg; 
// } 
// y = 2; ?;
//  const result = update(x); *

const x = 2; 
 let y = 4;
 function update(arg) { 
   return Math.random() + y * arg; 
} 
y = 2.6;
 const result = update(x); 
 console.log({result});

//  Write a JavaScript program to display the current day and time in the following format.
//  Today is : Tuesday.
//  Current time is : 10 PM : 30 : 38

const today = new Date();
const day = today.getDay();

let dayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log("Today is:" + " " + dayList[day] + ".");

let hour = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

let prepand = (hour >= 12) ? "PM":"AM";

hour = (hour >= 12) ? hour-12:hour;

if (hour === 0 && prepand === 'PM'){
    if(minutes === 0 && seconds === 0){
       hour = 12;
       prepand = "Noon";
    }else{
        hour = 12;
        prepand = 'PM';
    }
}

if (hour === 0 && prepand === 'AM'){
    if(minutes === 0 && seconds ===0){
        hour = 12;
        prepand = 'Midnight';
    }else{
        hour = 12;
        prepand = 'AM'
    }
}

console.log("Current Time:" + hour +" "+ prepand + " " + ":" +" "+ minutes + " "+ ":"+" " + seconds);

