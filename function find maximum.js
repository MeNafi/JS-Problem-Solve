function max (a,b) {
    if (a > b) {
        return a;
    }
    else if ( a <  b) {
        return b;
    }
    else {
        return "Both are equal";
    } 


}
console.log(max(11, 24));


// if am i used arrow function to solve this problem

const max = (a,b) => {
    if (a > b){
        return a;
    }
    else if (a < b) {
        return b;
    }
    else {
        return "Both are equal";
    }
}

console.log(max(11,24));