let functions = require('./functions')

test('return two', () => {
    expect(functions.returnTwo()).toBe(2)
})

test('name greeting', () => {
    expect(functions.greeting('James')).toBe('Hello, James.')
    expect(functions.greeting('Jill')).toBe('Hello, Jill.')
})

describe('Math functions', () => {
    test('add and get the sum of 2 numbers', () => {
        expect(functions.add(1, 2)).toEqual(3)
        expect(functions.add(5, 9)).toEqual(14)
    })

    test('subtract and get a number', () => {
        expect(functions.subtract(1, 2)).toEqual(1)
        expect(functions.subtract(5, 9)).toEqual(4)
    })

    test('multiply and get a number', () => {
        expect(functions.multiply(1, 2)).toEqual(2)
        expect(functions.multiply(5, 9)).toEqual(45)
    })

    test('divide and get a number', () => {
        expect(functions.divide(1, 2)).toEqual(2)
        expect(functions.divide(5, 9)).toEqual(1.8)
    })
})