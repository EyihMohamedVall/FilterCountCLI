const {data} = require('../data')

const checkForPattern = (string, pattern) => string.includes(pattern)

const filterPeople = (people, pattern) => people.reduce((filteredPoeple, person) => {
  const {name, animals} = person
  const filteredAnimals = animals.filter(({name: animalName}) => checkForPattern(animalName, pattern))

  if(filteredAnimals.length) {
    filteredPoeple.push({
      name,
      animals: filteredAnimals
    })
  }
  return filteredPoeple
}, [])

function filter(pattern) {
  if(!pattern?.length) {
    return data
  }

  return data.reduce((filteredCountries, country) => {
    const {name, people} = country
    const filteredPeople = filterPeople(people, pattern)

    if(filteredPeople.length) {
      filteredCountries.push({
        name,
        people: filteredPeople
      })
    }
    return filteredCountries
  }, [])
}

module.exports = {
  filter,
  filterPeople,
  checkForPattern
};