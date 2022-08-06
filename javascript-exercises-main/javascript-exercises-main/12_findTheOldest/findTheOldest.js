const findTheOldest = function(arr) {

    let oldest;
    let oldestAge = 0;

    for(let person of arr){
        let birth = person["yearOfBirth"];
        let death = 'yearOfDeath' in person ? person['yearOfDeath']: new Date().getFullYear();
        let age = death - birth;
        if(age > oldestAge){
            oldest = person;
            oldestAge = age;
        }

    }
    console.log(oldestAge);
    return oldest;

};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
