const {getPeopleWithCount, count} = require('./index')

describe('[getPeopleWithCount]', () => {
  it('Should return the People array with the name updated by the animals count', () => {
      const people = [{name: "Person", animals: [{name: "Manta Ray"}, {name: "Nubian Ibex"}]}]
      const response = getPeopleWithCount(people)
      const excpectedResult = [{name: "Person [2]", animals: [{name: "Manta Ray"}, {name: "Nubian Ibex"}]}]
      expect(response).toStrictEqual(excpectedResult)
  })
});

describe('[count]', () => {
  it('Should return the data with the name of the country and people updated by the count of their children', () => {
      const data = [{name: 'Uzuzozne', people: [{name: 'Lillie Abbott', animals: [{name: 'John Dory'}]}]}]
      const response = count(data)
      const excpectedResult = [{name: 'Uzuzozne [1]', people: [{name: 'Lillie Abbott [1]', animals: [{name: 'John Dory'}]}]}]
      expect(response).toStrictEqual(excpectedResult)
  })
});
