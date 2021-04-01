const MAJORITY = 18

const Alice = {
  firstName: 'Alice',
  lastName: 'Liddell',
  age: 28,
  language: ['javascript', 'solidity']
}
const Bob = {
  firstName: 'Bob',
  lastName: 'Lemon',
  age: 30,
  language: ['javascript', 'html', 'css']
}
const Charlie = {
  firstName: 'Charlie',
  lastName: 'Charlot',
  age: 8,
  language: ['javascript', 'php']
}

function printInfo(person) {
  console.log(`${person.firstName} ${person.lastName}, you are ${person.age} years old.`)
}
function canVote(person) {
  return person.age >= MAJORITY
}
function mostSkilledDev(person1, person2) {
  return person1.language.length > person2.language.length ? person1.firstName
    : person2.language.length > person1.language.length ? person2.firstName : 'draw'
}

printInfo(Alice)
printInfo(Bob)
printInfo(Charlie)
console.log(canVote(Alice))
console.log(canVote(Bob))
console.log(canVote(Charlie))
console.log(mostSkilledDev(Alice, Charlie))
console.log(mostSkilledDev(Bob, Alice))
console.log(mostSkilledDev(Charlie, Bob))