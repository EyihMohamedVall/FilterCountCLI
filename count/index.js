const {data} = require('../data')

const getPeopleWithCount = (people) => people.map((person) => {
  const {name, animals} = person

  return {
    name: `${name} [${animals.length}]`,
    animals
  }
}, [])

function count(dataSet = data) {
  return dataSet.map((country) => {
    const {name, people} = country
    const peopleWithCount = getPeopleWithCount(people)

    return {
      name: `${name} [${people.length}]`,
      people: peopleWithCount
    }
  }, [])
}

module.exports = {
  count,
  getPeopleWithCount,
};