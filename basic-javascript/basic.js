// Klasik Fonksiyon Tanımı
function add(a, b) {
  return a + b;
}

// Arrow Function Tanımı
const addArrow = (a, b) => a + b;

// Klasik Fonksiyon Tanımı ile setTimeout
setTimeout(function () {
  console.log("Klasik Fonksiyon - Event Loop");
}, 2000);

// Arrow Function ile setTimeout
setTimeout(() => {
  console.log("Arrow Function - Event Loop");
}, 2000);

// Klasik Fonksiyon
const square = function (x) {
  return x * x;
};

// Arrow Function
const squareArrow = (x) => x * x;

const add = (a, b) => a + b;
console.log(add(3, 4)); // 7

const square = (x) => x * x;
console.log(square(5)); // 25

const isEven = (num) => num % 2 === 0;
console.log(isEven(10)); // true

const isOdd = (num) => num % 2 !== 0;
console.log(isOdd(7)); // true

const compareStrings = (str1, str2) => {
  return str1.toLowerCase() === str2.toLowerCase();
};

console.log(compareStrings("Hello", "hello")); // true

const pi = 3.14;
// pi = 3.1415; // Hata: Bir const değişkeni değiştirmeye çalışıyor.

const person = { name: "John", age: 30 };
person.age = 31; // Geçerli: person bir nesnedir, nesnenin içindeki özellikler değiştirilebilir.

let x = 10;
x = 20; // Geçerli: x değiştirilebilir.

let y;
y = 5; // Geçerli: y değiştirilebilir.

// var ile scope
function exampleVar() {
  if (true) {
    var x = 10;
    console.log(x); // 10
  }
  console.log(x); // 10 (var, fonksiyon kapsamında olduğu için burada da erişilebilir)
}

// let ile scope
function exampleLet() {
  if (true) {
    let y = 20;
    console.log(y); // 20
  }
  // console.log(y); // Hata: y, bu blok dışında tanımlanmıştır ve burada erişilemez
}
