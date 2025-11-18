// let array=[]
// console.log(array[100])

let arr=[]
arr["99"]=99
console.log(arr)

let num= [7,87,8,9,]
num["99"]=99;
console.log(num) 

// create array
console.log(Array.of(6,7,8))

// string to array like seperate the words in to letters with space like h e l l
console.log(Array.from("hello"))

// check if array
console.log(Array.isArray(num)) 

// removing one value or element
let fruits=["kiwi", "banana", "grapes"]
// 1,1 is first 1 is element index second 1 is how many element should delete
fruits.splice(1,1)
// remove and add
fruits.splice(1,1, "berry")
console.log(fruits)

// merging arrays
let a=["hi", "hello"]
let b= ["how", "are"]

// over writting and replacing
let data=[1,2,3,4,5]
data.copyWithin 

console.log(["a","s","t","y"].slice(1,3))
console.log(["a","s","t","y"].toSpliced(1,1))




