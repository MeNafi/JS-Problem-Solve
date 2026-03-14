function oddeven(num) {
  const remainder = num % 2;
  if (remainder === 0) {
    return "even";
  } else {
    return "Odd";
  }
}

console.log("This is", oddeven(4));
