import { findNumbers } from './Solution.test';

test('my test', () => {
    expect(findNumbers([12, 345, 2, 6, 7896])).toEqual(2);
    expect(findNumbers([555, 901, 482, 1771])).toEqual(1);
});
