const MAJORITY = 18
class Human {
  constructor(firstName, lastName, age, language) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.language = language
    this.canVote = this.age >= MAJORITY
  }
  printInfo() {
    console.log(`${this.firstName} ${this.lastName}, you are ${this.age} years old.`)
    console.log(`You ${this.canVote ? 'can' : 'can\'t'} vote.`)
  }
  mostSkilledDev(p1, p2) {
    return p1.language.length > p2.language.length ? p1.firstName
      : p2.language.length > p1.language.length ? p2.firstName : 'draw'
  }
}
const Alice = new Human('Alice', 'Liddell', 28, ['javascript', 'solidity'])
const Bob = new Human('Bob', 'Lemon', 30, ['javscript', 'html', 'css'])
const Charlie = new Human('Charlie', 'Charlot', 8, ['javscript', 'php'])

Alice.printInfo()
Bob.printInfo()
Charlie.printInfo()
console.log(mostSkilledDev(Alice, Bob))
console.log(mostSkilledDev(Bob, Charlie))
console.log(mostSkilledDev(Charlie, Alice))
