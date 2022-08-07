let first = 5;
let second = 7;
// rule-1 with temp
// const temp = first;
// first = second;
// second = temp;

// rule-2 destructuring
[first, second] = [second, first];
console.log(first, second);