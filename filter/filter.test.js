const { data } = require('../data');
const {filter, filterPeople, checkForPattern} = require('./index')

describe('[checkForPattern]', () => {
    it('Should return true if the pattern is inside the string', () => {
        const string = 'test'
        const pattern = 'es'
        const response = checkForPattern(string, pattern)
        expect(response).toBe(true)
    })
    it('Should return false if the pattern is not inside the string', () => {
        const string = 'test'
        const pattern = 'ab'
        const response = checkForPattern(string, pattern)
        expect(response).toBe(false)
    })
});

describe('[filterPeople]', () => {
    let people = [];

    beforeEach(() => {
        people = [{
            name: 'Person 1',
                animals: [{name: 'Anoa'}, {name: 'Duck'}]
            },
            {
                name: 'Person 2',
                animals: [{name: 'Manta Ray'}, {name: 'Nubian Ibex'}]
            }
        ]
    })

    it('Should return a filtered People array with only the animals matching the pattern', () => {
        const pattern = 'an'
        const response = filterPeople(people, pattern)
        const excpectedResult = [{name: "Person 2", animals: [{name: "Manta Ray"}, {name: "Nubian Ibex"}]}]
        expect(response).toStrictEqual(excpectedResult)
    })

    it('Should return an empty array if no animals match the pattern', () => {
        const pattern = 'ish'
        const response = filterPeople(people, pattern)
        expect(response).toStrictEqual([])
    })
});


describe('[filter]', () => {
    it('Should return the data object unchanged if no pattern or an empty pattern is passed', () => {
        const pattern = ''
        const response = filter(pattern)
        expect(response).toStrictEqual(data)
    })

    it('Should return the filtered data with only the animals matching the pattern', () => {
        const pattern = 'ry'
        const response = filter(pattern)
        const excpectedResult = [
            {
                name: 'Uzuzozne',
                people: [
                {
                    name: 'Lillie Abbott',
                    animals: [
                    {
                        name: 'John Dory'
                    }
                    ]
                }
                ]
            },
            {
                name: 'Satanwi',
                people: [
                {
                    name: 'Anthony Bruno',
                    animals: [
                    {
                        name: 'Oryx'
                    }
                    ]
                }
                ]
            }
        ]
        expect(response).toStrictEqual(excpectedResult)
    })

    it('Should return an empty array if no animals match the pattern', () => {
        const pattern = 'test'
        const response = filter(pattern)
        expect(response).toStrictEqual([])
    })
});
