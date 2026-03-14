function oddeven(num) {
  const remainder = num % 2;
  if (remainder === 0) {
    return "even";
  } else {
    return "Odd";
  }
}

console.log("This is", oddeven(4));


// if am i use ternary operator to solve this problem

function oddeven (num) {
    return num % 2 ===0 ? "even" : "odd" 
}

console.log("This is", oddeven(7));