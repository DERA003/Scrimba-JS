
  let col = 3
  let row = 3
  let arr = []

 for(i=0; i<row; i++){
      arr[i] = []
    for(j=0; j<col; j++){
        arr[i][j] = 0;
    }
  }


console.log(arr);


let numbers = [1,2,3,4,5,6,7,8]
// for(i = 0; i < numbers.length;i++){
//     console.log(numbers[i]);
// }

// numbers.forEach((number,index)=>{
//     console.log(number);
// })

let squares = numbers.map((number)=>Math.pow(number,2))
// console.log(squares);

let students = ["Chidera", "Ikechukwu"]

let upper = students.map((student)=>student.toUpperCase())
console.log(upper);

let products = ["fanta", "coke", "sprite","lemon"]
let appendStar = products.map((product)=>product + "*")
console.log(appendStar);

//filter
let newNumbers = [1,2,3,4,5,6,7,8,9,10]
let evenOnly = newNumbers.filter((newNumber) => newNumber % 2 === 0)
console.log(evenOnly);

let names = ["Chidera","Lordwill","Favour","May","Charles"]
let namelength = names.filter((eachName) => eachName.length > 4)
console.log(namelength);