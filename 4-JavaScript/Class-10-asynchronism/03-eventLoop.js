// Microtask
Promise.resolve().then(() => {
  console.log(4);
});

// Microtask
queueMicrotask(() => {
  console.log(3);
});

// Task
setTimeout(() => {
  console.log(2);
});

// call stack
console.log(1);

// call stack
for (let index = 0; index < 20000; index++) {
  console.log(0);
}

meuStorage = localStorage;
localStorage.key(1)
localStorage.setItem("meuGato", "Tom","a");
console.log(meuStorage);
