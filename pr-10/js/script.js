function swap(a, b) {

    console.log(`Before Swapping:- a = ${a} , b = ${b}`);

    a = a + b;
    b = a - b;
    a = a - b;

    console.log(`After Swapping:- a = ${a} , b = ${b}`);

}

swap(3, 5);
swap(10, 20); 