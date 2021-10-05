const { returnTwo, greeting, add, multiply, divide, subtract } = require('./functions');

describe('Math Functions', () => {
    
    test('add function should return the sum of two num params', () => {
        expect(add(31, 3)).toEqual(34);
        expect(add(5, 9)).toEqual(14);
    
    });
    
    
    test('multiply function should multiply num1 and num2', () => {
        expect(multiply(2, 2)).toEqual(4);
        expect(multiply(4, 6)).toEqual(24);

    });

    test('divide funciton divides num1 and num2', () => {
        expect(divide(10, 2)).toEqual(5);
        expect(divide(24, 4)).toEqual(6);

    })

    test('subtract function num1 - num2', () => {
        expect(subtract(10, 3)).toEqual(7);
        expect(subtract(10, 5)).toEqual(5);

    })
});
test('return the number 2', () => {
    expect(returnTwo()).toEqual(2);


});

test('greeting should return hello and then the name param', () => {
    expect(greeting('Ash')).toEqual('Hello Ash.');
    expect(greeting('Jill')).toEqual('Hello Jill.');

});

test('add function should return the sum of two num params', () => {
    expect(add(31, 3)).toEqual(34);
    expect(add(5, 9)).toEqual(14);

});
