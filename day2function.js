function circle(r,h){
    return Math.PI*r**2*h
}
let total= circle(6,20)
console.log(total.toFixed(6))

// traditional fuction
const multiple= function(n){
    return n*n
}
console.log(multiple(5))

// arrow funtion
const square= (n) => n*n;
console.log(square(5));

// default parameter
function greet(name="guest"){
    console.log("Hello" + name)
}
greet()

// function calling another function
function add (a,b){
    return a+b
}
function displaySum(){
    let result = add(3,7)
    console.log("sum is-" +result)
}
displaySum()



// example salary
function salary(a,b){
    return (a+b)

}

function tenbonus (){
    let totalSalary=salary(10000,20000)
    let bonus= totalSalary * 0.10
    let final= add(totalSalary,bonus)
    console.log("Final Salary with 10% bonus:",final);
}
tenbonus();

// using arrow example
let salaryy=(a,b) => a + b ;

let tenBonus = () => {
    let totalSalary = salaryy(10000, 20000)
    let bonus = totalSalary * 0.10
    let final = add(totalSalary, bonus)
    console.log("Final Salary with 10% bonus:", final)
}
tenBonus()

// for each
function totals(a,b){
    return a+b
}

function tenEach() {
    let totalBoth = totals(10000,20000)
    let abonus= 10000 *0.10
    let bbonus= 20000*0.10
    let bothBonus= (abonus + bbonus )
    let end = (totalBoth + bothBonus)
    console.log("Final Salary with 10% bonus:",end)
}
tenEach()





