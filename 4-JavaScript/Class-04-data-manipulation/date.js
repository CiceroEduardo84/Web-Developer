// Date Manipulation

// new: left-hand-side expression
let dateNow = new Date();
let date1 = new Date("2023-12-1");

console.log(dateNow);
console.log(date1);

// console.log(dateNow.getMilliseconds());
// console.log(dateNow.getSeconds());
// console.log(dateNow.getMinutes());
// console.log(dateNow.getDay());
console.log(dateNow.getHours());
console.log(dateNow.getDate());
console.log(dateNow.getMonth());
console.log(dateNow.getFullYear());

// console.log(dateNow.getDay() + 1);
// console.log(dateNow.getDate() + 6);

console.log(new Date().setHours(dateNow.getHours() + 12));
console.log(dateNow.setDate(dateNow.getDate() + 6));
console.log(dateNow.setMonth(dateNow.getMonth()));
console.log(dateNow.setFullYear(dateNow.getFullYear()));

let date2 = new Date();
let day = date2.getDate();
let month = String(date2.getMonth()).padStart(2, "0");
let year = date2.getFullYear();

console.log(`${day}/${month}/${year}`);

console.log(
  date2.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
);

let date3 = new Date("2023-12-1 12:03:24");
let date4 = new Date("2023-12-3 18:03:24");

console.log((date4 - date3) / 1000 / 60 / 60 / 24);
// 2.25;
// 2;
console.log(0.25 * 24);
