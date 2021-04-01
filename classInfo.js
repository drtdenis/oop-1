
/*const alice = {

  firstName: 'Alice',
  lastName: 'Liddell',
  age: 28,
  language: ['HTML/CSS', 'JavaScript', 'PHP', 'Ruby']

}

const  bob = {

  firstName: 'Bob',
  lastName: 'Lemon',
  age: 30,
  language: ['C++', 'Python', 'Julia']
}

const charlie = {

  firstName: 'Charlie',
  lastName: 'Charlot',
  age: 8,
  language: ['Pokemon', 'Marvel']

}

*/

class Human {
  constructor(firstName, lastName, age, language) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.language = language
  }
run() {
    return (`first name:${this.firstName},last name:${this.lastName},age:${this.age},language:${this.language}`)
  }

  printInfo() {
    console.log(`first name: ${this.firstName}`)
    console.log(`last name: ${this.lastName}`)
    console.log(`age: ${this.age}`)
    //console.log(`language: ${this.language}`)
    this.language.forEach((elem) => {
      console.log(`\t${elem}`)
    })
  }
  canvote = (person) => {
  if (this.age > 18)
  console.log(true)
  else
  console.log(false)

  }
}
const alice = new Human('Alice', 'Liddell', '28',['HTML/CSS', 'JavaScript', 'PHP', 'Ruby'] )
console.log(alice.run())
alice.printInfo()
alice.canvote()