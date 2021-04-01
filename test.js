class Person {
  constructor(firstName, age, friends, isDev) {
    this.firstName = firstName
    this.age = age
    this.friends = friends
    this.isDev = isDev
  }
  run() {
    return `${this.firstName} is running from ${this.from} to ${this.to}`
  }
  printInfo() {
    console.log(`first name: ${this.firstName}`)
    console.log(`age: ${this.age}`)
    console.log(`friends:`)
    this.friends.forEach((elem) => {
      console.log(`\t${elem}`)
    })
    console.log(`is dev: ${this.isDev}`)
  }
}

const alice = new Person('Alice', 27, ['Bob', 'Charlie'], true)
const bob = new Person('Bob', 30, ['Alice', 'Charlie'], false)
console.log(alice.run())
console.log(bob.run())
alice.printInfo()
bob.printInfo()