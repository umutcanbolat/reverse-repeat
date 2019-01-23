module.exports = (input) => {
  let text = input;
  // type check
  if (typeof text === 'undefined') {
    return text;
  } if (typeof text !== 'string') {
    text = text.toString();
  }

  // will not check strings which is longer than the half of the original string
  for (let i = 1; i <= text.length / 2; i += 1) {
    // check strings which can divide original strings without reminder
    if (text.length % i === 0) {
      // repeated: potential repeated string
      const repeated = text.substring(0, i);
      // we will set this flag false if it is not repeated on every step
      let isRepeated = true;

      // start scanning the original string
      for (let j = 0; j < text.length - repeated.length + 1; j += repeated.length) {
        // part of the original string to be compared with potential repeated
        const compare = text.substring(j, j + repeated.length);

        if (compare !== repeated) {
          isRepeated = false;
          break;
        }
      }

      if (isRepeated) {
        const repeatCount = text.length / repeated.length;
        return {
          repeated,
          count: repeatCount,
        };
      }
    }
  }

  // if no repeats found, then return the input itself
  return {
    repeated: text,
    count: 1,
  };
};
