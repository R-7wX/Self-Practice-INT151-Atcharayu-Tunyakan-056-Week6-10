// Client-Side Storage
function runPractice(){
  localStorage.setItem('username', 'Student')
  const name = localStorage.getItem('username')
  document.getElementById("output").textContent = "Welcome back, " + name
}
