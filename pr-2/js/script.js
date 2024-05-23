function Circlearea(radius) {
    const pi = 3.14
    const area = pi * radius * radius;
    return area;
}

const radius = 5;
const area = Circlearea(radius);

console.log(`The area of the circle with radius = ${radius} and ans is = ${area}`);
