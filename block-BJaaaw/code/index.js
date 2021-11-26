// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let number = prompt("Tell me a number and i will tell you whether it is odd or even");
if((number % 2) == 0){
  console.log("number is even");
}else{
  console.log("number is odd");
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let numA = prompt("Tell me first number");
let numB = prompt("Tell me second number");
if(numA > numB){
  alert(`${numA} is max`);
}else{
  alert(`${numB} is max`);
}

// 3. Convert the above code using`?` terniary operator
numA>numB ? alert(`${numA} is max`) : alert(`${numB} is max`);

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName = prompt("What is the house name");
if(houseName === "stark"){
  console.log("Winter is coming");
}else if(houseName === "lannister"){
  console.log(" A lannister always pays his debt");
}else{
  console.log(" All men must die");
}

// 5. Convert the above code using`?` terniary operator

houseName === "stark" ?
           console.log("Winter is coming"):
                     houseName === "lannister" ?
                          console.log(" A lannister always pays his debt"):
                                console.log(" All men must die");

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let month = Number(prompt("Which month in number?"));
let evenMonthDays = 30;
let oddMonthDays = 31;
let februaryDays = 28;
switch(month){
    case 1:
      alert(`January has ${oddMonthDays} days`);
      break;
    case 2:
      alert(`February has ${februaryDays} days`);
      break;
    case 3:
      alert(`March has ${oddMonthDays} days`);
      break;
    case 4:
      alert(`April has ${evenMonthDays} days`);
      break;
    case 5:
      alert(`May has ${oddMonthDays} days`);
      break;
    case 6:
      alert(`June has ${evenMonthDays} days`);
      break;
    case 7:
      alert(`July has ${oddMonthDays} days`);
      break;
    case 8:
      alert(`August has ${oddMonthDays} days`);
      break;
    case 9:
      alert(`September has ${evenMonthDays} days`);
      break;
    case 10:
      alert(`October has ${oddMonthDays} days`);
      break;
    case 11:
      alert(`November has ${evenMonthDays} days`);
      break;
    case 12:
      alert(`December has ${oddMonthDays} days`);
      break;
    default:
      alert('You did not make right selection');
      break;
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %
*/

let salary = Number(prompt(`what is your salary?`));

switch(true){
    case salary <= 20000:
      alert(`Inhand amount is ${salary - (0.1*salary)}`);
      break;
    case salary <= 40000:
      alert(`Inhand amount is ${salary - (0.2*salary)}`);
      break;
    case salary > 50000:
      console.log("dnejdnk")
      alert(`Inhand amount is ${salary - (0.3*salary)}`);
      break;
    default:
      console.log(salary);
      alert("you did not make correct selection");
      break;
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

let marks = Number(prompt(`what is your marks?`));

if(marks > 100){
  alert(`"Marks can't be greater than 100"`);
}else if(marks > 80 && marks < 100){
  alert(`"Grade A"`);
}else if(marks > 50 && marks < 80){
  alert("Grade B");
}else if(marks > 30 && marks < 50){
  alert("Grade c");
}else if(marks > 0){
  alert("Grade D");
}

switch(true){
  case (marks > 100):
    alert(`"Marks can't be greater than 100"`);
    break;
  case (marks > 80 && marks < 100):
    alert(`"Grade A ----"`);
    break;
  case(marks > 50 && marks < 80):
    alert("Grade B");
    break;
  case(marks > 30 && marks < 50):
    alert("Grade c");
    break;
    case(marks > 0):
    alert("Grade d");
    break;
  default:
    console.log(typeof marks)
    alert("you did not make correct selection");
    break;

}


/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weather = prompt(`what is weather outside?`);

if(weather == "sunny"){
  alert(`Wear a T-shirt`);
}else if(weather == "rainy"){
  alert(`Don't forget to take your raincoat`);
}else if(weather == "hot"){
  alert(`Get a hanky`)
}else if(weather == "freezing"){
  alert(`Get your sweeter on`)
}else{
  alert(`Not a valid input`)
}

