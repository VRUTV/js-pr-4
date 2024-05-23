function Trianglearea(l,h) {
    const area = (l * h) / 2;
    return area;
}

const l = 10;
const h = 5;

const area = Trianglearea(l, h);

console.log(`The area of the triangle with base  length =  ${l} and  height = ${h} and ans is =  ${area}`);
