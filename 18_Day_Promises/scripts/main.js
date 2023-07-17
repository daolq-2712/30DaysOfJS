//Callback
const doSomething = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback(false, skills)
      callback('It did not go well', skills)
    }, 2000)
  }
  
  const callback = (err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  }
  
  doSomething(callback)

const url = 'https://restcountries.com/v2/all' // countries api
// Promise
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    console.log(data)
  })
  .catch(error => console.error(error)) // handling error if something wrong happens

// Async and await
const fetchData = async () => {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/breeds')
        const countries = response.json()
        console.log(countries)
    }
    catch (err) {
        console.error(err)
    }
}

console.log('==== async and await')
fetchData()
