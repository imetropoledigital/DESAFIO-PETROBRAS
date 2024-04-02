const estimate = require('./estimate');

test('to be NaN', () => {
  expect(estimate(0,0,0,0,0)).toBe(NaN);
});

test('to be 0', () => {
    expect(estimate(2,1,0,0,0)).toBe(0);
});

test('No pressure diff. To be 0', () => {
    expect(estimate(2,1,1,0,0)).toBe(0);
});

test('Positive presure', () => {
    expect(estimate(2,1,1,2,1)).toBeCloseTo(1.14, 1)
});

test('Negative presure', () => {
    expect(estimate(2,1,1,1,2)).toBe(NaN)
});

test('Value test', () => {
    expect(estimate(20,5,0.987,4,2)).toBeCloseTo(39.09, 1)
});

test('Other value test', () => {
    expect(estimate(6,5,0.7,10,5)).toBeCloseTo(72.19, 1)
});
