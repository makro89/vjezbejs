function traziNajduzuRijec(zadaniNiz) {
    var najduzaRijecUFunkciji = "";
    var rijec = "";
    var lenBroj = 0;
    for (let i = 0; i < zadaniNiz.length; i++) {
        rijec = zadaniNiz[i];
        if (rijec.length >= lenBroj) {
            lenBroj = rijec.length;

        }
    }
    for (let i = 0; i < zadaniNiz.length; i++) {
        rijec = zadaniNiz[i];
        if (rijec.length === lenBroj) {
            najduzaRijecUFunkciji = najduzaRijecUFunkciji + " " + rijec;
        }
    }

    return najduzaRijecUFunkciji;
}

var niz = ["Marko", "Ana", "Josipa", "Anamarija", "kkkkkkkkk", "Ivo"];
var najduzeIme = traziNajduzuRijec(niz);

console.log(najduzeIme);