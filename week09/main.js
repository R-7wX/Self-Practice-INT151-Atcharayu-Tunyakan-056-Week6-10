// Event Handling
function runPractice(){
  const btn = document.createElement('button')
  btn.textContent = "Click Me"
  document.getElementById("output").appendChild(btn)
  btn.addEventListener('click', e=>{
    e.target.textContent = "Clicked!"
  })
}
