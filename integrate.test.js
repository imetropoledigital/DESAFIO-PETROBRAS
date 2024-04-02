const integrate = require('./integrate');

test('to be zero', () => {
    expect(integrate([])).toBe(0);
});

test('to be zero', () => {
    expect(integrate([{x: 1, y: 1}])).toBe(0);
});

test('to be one', () => {
    expect(integrate([{x: 1, y: 1}, {x: 2, y: 1}])).toBeCloseTo(1);
});

test('to be two', () => {
    expect(integrate([{x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}])).toBeCloseTo(2);
});

test('to be three', () => {
    expect(integrate([{x: 1, y: 1}, {x: 3, y: 2}])).toBeCloseTo(3);
});

test('to be 24', () => {
    expect(integrate([{x: 2, y: 5}, {x: 6, y: 7}])).toBeCloseTo(24);
});

test('to be 63', () => {
    expect(integrate([{x: 1, y: 2}, {x: 2, y: 4}, {x: 4, y: 8}, {x: 8, y: 16}])).toBeCloseTo(63);
});

test('Complex test', () => {
    expect(integrate([
                      {x: 0.1, y: 10}, {x: 0.2, y: 40}, {x: 0.3, y: -8}, {x: 0.4, y: 16},
                      {x: 0.6, y: 12}, {x: 0.8, y: 20}, {x: 1.4, y: 0}, {x: 2, y: 4},
                      {x: 2.1, y: 0.7}, {x: 2.56, y: 1}, {x: 3.9, y: 0}, {x: 4.2, y: 4.6}
                    ])).toBeCloseTo(19.68, 1);
});

