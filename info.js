const alice = {

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

/*
const canvote = (person) => {
  if (person.age > 18)
  console.log(true)
  else
  console.log(false)
}
canvote(alice)
canvote(bob)
canvote(charlie)
*/


const mostSkilledDev = (person1, person2) => {

  if ( person1.language.length < person2.language.length)
    console.log(person2.firstName)
    else if ( person1.language.length > person2.language.length)
    console.log(person1.firstName)
    else
    console.log('draw')
}
mostSkilledDev(alice,bob)
mostSkilledDev(alice,charlie)
mostSkilledDev(bob,charlie)
mostSkilledDev(charlie,charlie)