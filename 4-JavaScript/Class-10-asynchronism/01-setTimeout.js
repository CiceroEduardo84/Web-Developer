let count = 0;

const timeOut = setTimeout(() => {
  console.log("setTimeout");
}, 0);

const interval = setInterval(() => {
  console.log(`setInterval${count}`);
  count++;

  if (count == 10) {
    clearInterval(interval);
  }
}, 1000);

console.log("antes");
console.log(interval);
console.log("depois");
console.log(timeOut);
