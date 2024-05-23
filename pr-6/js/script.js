function Sum(a, b) {

    const result = (a * a) + (2 * a * b) + (b * b);

    return result;
}

const a = 3;
const b = 4;

const result = Sum(a, b);

console.log(`a=${a} and b=${b} is ${result}`);
