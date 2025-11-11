Hoisting
console.log(num);
let num= 25;

console.log(num);
var num= 25;

console.log(num);
const num= 25;


Scope

Function scope
{
    let x =25
    console.log(x)
}
console.log(x)

Block scope
{
    const x =25
    console.log(x)
}
console.log(x)

{
    let x =25
    console.log(x)
}
console.log(x)