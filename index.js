var output = [];

// function fizzbuzz() {
//   for (var count = 1; count < 101; count++) {
//     if (count % 3 === 0 && count % 5 === 0) {
//       output.push("FizzBuzz");
//     } else if (count % 3 === 0) {
//       output.push("Fizz");
//     } else if (count % 5 === 0) {
//       output.push("Buzz");
//     } else {
//       output.push(count);
//     }
//   }
//   console.log(output);
// }

var count = 1;
function fizzbuzz() {
  while (count <= 101) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
    count++;
  }
  console.log(output);
}

fizzbuzz();

// var GuestList = ["Suyog", "Chaitali", "Mrunal", "Bhushan", "Pratik"];
// var GuestName = prompt("Your name is");
// if (GuestList.includes(GuestName)) {
//   alert("Welcome");
// } else {
//   alert("Sorry,Try next time");
// }
