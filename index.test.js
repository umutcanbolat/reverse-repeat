const reverseRepeat = require('./index');

test('basic test', () => {
    expect(reverseRepeat("qwe".repeat(18))).toEqual({
        repeated: "qwe", 
        count: 18});
  });

test('test with integer value', () => {
    expect(reverseRepeat(121212)).toEqual({
        repeated: "12", 
        count: 3});
  });


test('test with not repeated input', () => {
    expect(reverseRepeat("there is no repeat here")).toEqual({
        repeated: "there is no repeat here", 
        count: 1});
  });

test('test with 2 repeats', () => {
    expect(reverseRepeat("qwe".repeat(2))).toEqual({
        repeated: "qwe", 
        count: 2});
  });