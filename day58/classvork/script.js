// let myName = ['d','a','c','i','s','a','z','a','n','d','r','i','s','h','v','i','l','i']

// myName.splice(4,9)

// console.log(myName)

function createObject(Name,Age,Rate){
  this.name = Name,
  this.age = Age,
  this.rate = Rate
};

const leaderDachi = new createObject("dachi",15,9);
const leaderGabriel = new createObject("gabriel",18,10);

console.log(leaderDachi.name);
console.log(leaderGabriel.name)