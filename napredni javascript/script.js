function vratiNesto(x) {
    var y = x(1);
    return y;
}
function vratiMene(z){
    return z/2;
};
var y = vratiNesto(vratiMene);
console.log(y)


//drugi primjer
var person = {
    name: "John",
    surname: "Doe",
};
console.log(person);