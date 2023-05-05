const findTheOldest = function(people) {
    const todaysDate = new Date().getFullYear()
    people.sort((person1, person2) => 
    {return (((person2.yearOfDeath? person2.yearOfDeath : todaysDate) - person2.yearOfBirth) 
        - ((person1.yearOfDeath? person1.yearOfDeath : todaysDate) - person1.yearOfBirth));})
    return people[0]
};

// Do not edit below this line
module.exports = findTheOldest;
