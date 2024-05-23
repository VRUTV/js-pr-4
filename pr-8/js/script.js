function ctf(celsius) {

    const fahrenheit = (celsius * 1.8) + 32;

    return fahrenheit;
}

const celsius = 100;

const fahrenheit = ctf(celsius);

console.log(`${celsius} degrees Celsius is equal to ${fahrenheit} degrees Fahrenheit.`);
