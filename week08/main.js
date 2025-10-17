// DOM Part 2 Traversing
function runPractice(){
  const list = document.createElement('ul')
  ;['Apple','Banana','Cherry'].forEach(fruit=>{
    const li = document.createElement('li')
    li.textContent = fruit
    list.appendChild(li)
  })
  document.body.appendChild(list)
  const first = list.firstElementChild.textContent
  const last = list.lastElementChild.textContent
  document.getElementById("output").textContent = 
    `First: ${first} | Last: ${last}`
}
