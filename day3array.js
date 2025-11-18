let students=[
    {name: "Ayesha", score:75},
    {name:"Renu",score:90},
    {name:"Jeru",score:85},
    {name:"Thesh",score:60}
]

// forEach
// loop through skills array for each
students.forEach(list=> console.log(list.name))
students.forEach(get=> console.log(get.score))

// create new array using .map()
const scores= students.map(n => n.score)
console.log(scores)

// using .filter
const topStudents = students.filter(c => c.score > 80)
console.log(topStudents)

// .filter and .forEach
// const topStu = students.filter(function (c) {
//         return c.score > 80
//     })
// console.log(topStu)

// students.forEach(function(student) {
//     [student].filter(function(item) {
//         console.log(item.name);
//     });
// });

// const Students = stu.filter(c => c.score > 80).forEach(stu=> console.log(stu.name))

// calculate average using reduce()
const totalScore=students.reduce((sum,student) => sum + student.score)
const avgScore= totalScore/students.length
console.log(avgScore)
console.log(students.some(student=> student.score>80));
console.log(students.every(student=> student.score >80));
const nested =[[1,2],[3,4],[5,6,7]]
console.log(nested.flat())
const flatMapped = nested.flatMap(arr=> arr.map(n=>n*2))
console.log(flatMapped)