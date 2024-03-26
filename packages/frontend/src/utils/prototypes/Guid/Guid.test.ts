import Guid from './Guid';

describe('Guid Prototype', () => {
    test('Create new instance', () => {
        const test = new Guid();
        expect(test).toBeInstanceOf(Guid);
        expect(test.valueOf()).toMatch(Guid.regex);
    });
});
