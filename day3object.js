let employe = {
    name: "Thesha",
    age: 20,
    department: "IT",
    address: {
        city:"Trincomalee",
        zipCode: 300000
    },

    skills: ["Communication", "Excel", "JS", "Teamwork"]
}

console.log(employe.address.city)
console.log(employe["address"]["zipCode"])

// destructure object to extract name and department
const {name,department} = employe
console.log(name)
console.log(department)

// add a method introduce 
 employe.introduce = function () {
    console.log(`Hi!, My name is ${this.name} and Im working in ${this.department} department`)
}
employe.introduce()

// arrow function
let intro =()=>{
    console.log(`Hi!, My name is ${name} and Im working in ${department} department`)
}
intro()

 employe.introduce = () => {
    console.log(`Hi!, My name is ${name} and Im working in ${department} department`)
}
employe.introduce()

// loop through skills array for each
employe.skills.forEach(a => console.log(a))

// object keys and object values
console.log(Object.keys(employe))
console.log(Object.values(employe))

// loop iteration
// object.in