
function Sum (a, b, c) {

    const num = (b * b) - (4 * a * c);

    const den = 2 * a;
    
    const result = num / den;
    
    return result;
}


const a = 1;
const b = 5;
const c = 6;


const result = Sum (a, b, c);

// Print the result
console.log(` a=${a}, b=${b}, and c=${c} is ${result}`);
