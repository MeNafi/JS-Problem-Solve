function rec(len, wid) {
  const area = len * wid;
  console.log("Area od rectangle", area);

  return area;
}

rec(30, 30);

// if am i used arrow function to solve this problem

const rec = (len, wid) => {
  const area = len * wid;
  console.log("Area of rectangle", area);
};

rec(40, 40);
return rec;
