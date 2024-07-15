
let counter = 0
let empCount = document.getElementById("count")

function add() {
  counter = counter + 1
   empCount.innerHTML = counter
}

let empSave = document.getElementById("save-emp")
function save() {
 let result = counter + " - "
empSave.innerHTML += result
counter = 0
}