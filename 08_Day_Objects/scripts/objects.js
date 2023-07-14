// An empty object
const person = {}

// Creating an objecting with values
const rectangle = {
    length: 20,
    width: 10
}
console.log(rectangle)

// accessing values using .
console.log(rectangle.length)

// accessing values using square bracket and key name
console.log(rectangle['width'])

const personFull = {
    firstName: 'Dao',
    lastName: 'LQ',
    age: 31,
    country: 'VietNam',
    city: 'Danang',
    skills: [
      'Java',
      'Kotlin',
      'JavaScript',
      'Dart',
      'Node',
      'MongoDB',
    ],
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`
    },
    'phone number': '+84236545454'
  }

  console.log(personFull.getFullName())

  // Settings a new keys in a object
  personFull.title = 'IT Trainers'
  personFull.isMarried = true
  personFull.getPersonInfo = function() {
    let skillsWithoutLastSkill = this.skills.splice(0, this.skills.length - 1).join(',')
    let lastSkill = this.skills.splice(this.skills.length-1)[0]

    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullname = this.getFullName()
    let statement = `${fullname} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}`
    return statement
  }

  console.log(personFull)
  console.log(personFull.getPersonInfo())
