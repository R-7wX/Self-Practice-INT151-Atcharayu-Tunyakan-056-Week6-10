// DOM Part 1
function runPractice(){
  const title = document.createElement('h2')
  title.textContent = "Created by JavaScript"
  document.body.appendChild(title)
  document.getElementById("output").textContent = "Created <h2> element dynamically."
}
