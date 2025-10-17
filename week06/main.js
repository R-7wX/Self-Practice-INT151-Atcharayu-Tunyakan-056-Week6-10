// Functional Programming
const numbers = [1,2,3,4,5]
const doubled = numbers.map(n => n * 2)
const evens = doubled.filter(n => n % 4 === 0)
const total = evens.reduce((a,b)=>a+b,0)
console.log(total)
document.getElementById("output").textContent = "Sum of doubled even numbers: " + total
