function ispisiIme(ime) {
    console.log(ime);
}

ispisiIme("John Doe");
ispisiIme("Josipa");

for (let i = 1; i <= 5; i++) {
    ispisiIme("Josipa " + i);
}



function myFunc(a, b) {
    if (!b) {
        b = 1;
    }
    return a + b;
}
myFunc(1);
console.log(myFunc(1));

function myFunc(a, b) {
    b = b || 1;
    return a + b;
}
myFunc(1,1);

console.log(myFunc(1));


