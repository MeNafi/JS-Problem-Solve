function area (r) {
    return Math.round (Math.PI * r * r);
}

console.log(area(5));



// if am i used arrow function to solve this problem
const area = (r) => {
    const pi = Math.PI;
    const radius = r * r;
    const result = pi * radius;

    return Math.round(result);
};

console.log (area(5));