function rec(len, wid) {
  if (len <= 0) {
    throw new RangeError("Length must be a positive number");
  }

  if (wid <= 0) {
    throw new RangeError("Width should be a positive number");
  }

  const area = len * wid;
  console.log("Area od rectangle", area);

  return area;
}

rec(30, 30);

// if am i used arrow function to solve this problem

const rec = (len, wid) => {
  if (len <= 0) {
    throw new RangeError("Length must be a positive number");
  }

  if (wid <= 0) {
    throw new RangeError("Width must be an positive number");
  }
  const area = len * wid;
  console.log("Area of rectangle", area);
};

rec(40, 40);
return rec;
