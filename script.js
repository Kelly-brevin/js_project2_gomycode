// Prime Number Check: Create a function to check if a number is prime or not.
// function checkPrime() {
//   let userinput = prompt(" Enter a year to check whether it is leap or not");
//   if (userinput <= 0 || isNaN(userinput)) {
//     prompt("please enter a valid year");
//   } else if (
//     userinput % 4 == 0 ||
//     userinput % 100 == 1 ||
//     userinput % 400 == 0
//   ) {
//     alert(`The year ${userinput} is a leap year`);
//   } else {
//     alert(`The year ${userinput} is not a leap year`);
//   }
// }
// checkPrime();

//Factorial: Write a function to calculate the factorial of a given number.

function factorial() {
  let userinput = prompt("Enter a number to see its factorial");
  const number = parseInt(userinput);
  if (isNaN(number) || number < 0) {
    alert("Please enter a valid number");
  }
  //calculate the factorial
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  alert(`the factorial of ${number} is ${factorial}`);
}
factorial();
