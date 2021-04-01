const alice = {

  firstName: 'Alice',
  lastName: 'Liddell',
  age: 28

}

const  bob = {

  firstName: 'Bob',
  lastName: 'Lemon',
  age: 30

}

const charlie = {

  firstName: 'Charlie',
  lastName: 'Charlot',
  age: 8

}
/*
console.log(alice.firstName, alice.lastName, alice.age)
console.log(bob.firstName, bob.lastName, bob.age)
console.log(charlie.firstName, charlie.lastName, charlie.age)
*/

/*
const printInfo = (person) =>{
  console.log(`firstname: ${person.firstName}`)
  console.log(`last name: ${person.lastName}`)
  console.log(`age: ${person.age}`)
  
}
printInfo(alice)
printInfo(bob)
printInfo(charlie)
*/


const canvote = (person) => {
  if (person.age > 18)
  console.log(true)
  else
  console.log(false)
}
canvote(alice)
canvote(bob)
canvote(charlie)