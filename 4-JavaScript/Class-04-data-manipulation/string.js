// String Manipulation

// Prototype (Chain)
let myName = "Eduardo";

console.log(myName.__proto__);
console.log(myName.length);
console.log(myName[1]);
console.log(myName.toLocaleLowerCase());
console.log(myName.toLocaleUpperCase());
console.log(myName.toUpperCase());

console.log((myName[1] = "M")); // string immutable
console.log((myName = "Outra coisa"));
console.log(myName);

let phrase = "  Im a web web developer";

console.log((phrase.split(" ")[2] = "WEB"));
console.log(typeof phrase);

console.log(phrase.split("").reverse().join(""));
console.log(phrase.replace("web", "Web"));
console.log(phrase.replaceAll("web", "Web"));
console.log(phrase);

console.log(phrase.indexOf("w"));
console.log(phrase.trim());
console.log(phrase.substring(11));
console.log(phrase.substring(11).replace("web", "Web"));

console.log(phrase.includes("web"));
console.log("web" == "Web"); // case-sensitive
console.log(
  phrase.toLocaleLowerCase().includes("Web")
    ? "Teste Verdadeiro"
    : "Teste Falso"
);
