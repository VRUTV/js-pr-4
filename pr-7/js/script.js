function ftc(fahrenheit) {

    const celsius = (fahrenheit - 32) / 1.8;
    
    return celsius;
}


const fahrenheit = 100;
const celsius = ftc(fahrenheit);

console.log(`${fahrenheit} degrees Fahrenheit is equal to ${celsius} degrees Celsius.`);
