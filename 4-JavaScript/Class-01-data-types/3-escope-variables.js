var num = "Global";
const PI = 3.14;

console.log(num);
console.log(PI);
{
    var num = "Local";
    const PI = 14;
    console.log(PI);
    console.log(num);
}

console.log(PI);
console.log(num);