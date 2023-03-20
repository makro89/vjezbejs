function sum(a, b) {
    return a + b;
}
var myArr = [2, 86, 143, 3, 11, 90];
function nadjiNajveci () {
    let najveci;
for (let i = 0; i < myArr.length; i++){
let x = myArr[i];
if (najveci === undefined){
    najveci = x;
}
if  (x > najveci){
    najveci = x;
}
}
return najveci;

}
function nadjiNajmanji(){
    return 11;
}
module.exports = { nadjiNajveci, nadjiNajmanji};