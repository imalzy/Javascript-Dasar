// Operator Aritmatika
// +, -, *, /, %, **, ++, --

let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.3333
console.log(a % b); // 1
console.log(a ** b); // 1000

// Increment
let x = 10;
x++;
console.log(x);
let y = 10;
y--;
console.log(y);

// Assignment Operator
// =, +=, -=, *=, /=, %=
x += 5;
//sama dengan  x = x + 5;
console.log(x);

x -= 5;
//sama dengan  x = x - 5;
console.log(x);

x *= 5;
console.log(x);

x /= 5;
console.log(x);

x %= 5;
console.log(x);

// Comparison operator
// ==, ===, !=, !==, >, <, >=, <=

let nilai1 = 10;
let nilai2 = '10';
console.log('compare:', nilai1 == nilai2); // true
console.log('compare:', nilai1 === nilai2); // false

const isLogin = true;
// Ternary => Ya atau tidak (short if)
console.log(isLogin === true ? 'Sudah login': 'Belum Login');
