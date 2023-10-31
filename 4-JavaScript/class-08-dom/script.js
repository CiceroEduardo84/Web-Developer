const myTitle = document.querySelector("h1"); //element
const myContainer = document.querySelector(".container");

console.log(myTitle);
console.log(myTitle.textContent);
console.log(myTitle.innerHTML);

console.log(myContainer);
console.log(myContainer.textContent);
console.log(myContainer.innerHTML);

myTitle.innerText = "Document Object Model";
myTitle.innerText = "<i>Eduardo</i>";
myTitle.innerHTML = "<i>HTML</i>";

myTitle.style.color = "#f00";
myTitle.style.color = "peru";
myTitle.style.backgroundColor = "lightgray";

// const boxesNodeList = document.getElementsByClassName(".box"); //HTMLColection
const boxesNodeList = document.querySelectorAll(".box"); //Node list
console.log(boxesNodeList);
console.log(boxesNodeList.forEach((node) => (node.style.color = "blue")));

//Calculator
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const sumButton = document.querySelector(".sumButton");
const clear = document.querySelector(".clear");
const result = document.querySelector(".result");

function sumNumber() {
  result.innerHTML = Number(num1.value) + Number(num2.value);
}

function clearValues() {
  num1.value = "";
  num2.value = "";
  result.innerHTML = "";
}

sumButton.addEventListener("click", sumNumber);
clear.addEventListener("click", clearValues);

num1.addEventListener("keyup", () => {
  console.log(num1.value);
});
