
// 1. Getting elements by class name
const allTitles = document.getElementsByTagName('h1')

console.log(allTitles) //HTMLCollections
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}

// 2. Getting an element by id
let firstTitle = document.getElementById('first-title')
console.log(firstTitle) // <h1>First Title</h1>

// 3. Getting elements by using querySelector methods
// Adding attribute
const titles = document.querySelectorAll('h1')
titles[3].className = 'title'
titles[3].id = 'fourth-title'
titles[3].textContent = 'Fourth Title'

// Adding style
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.color = 'green'
  } else {
    title.style.color = 'red'
  }
})
