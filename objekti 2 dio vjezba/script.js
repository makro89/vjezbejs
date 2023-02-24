var auto = {
    marka: "vW",
    gorivo: "benzin",
    model: "Golf",
    godina: 2022,
    boja: "crvena",
    maxBrzina: 160,
    trenutnaBrzina: 0,
    ubrzaj: function(ubrzanje) {
        let brzina = 0;
        this.trenutnaBrzina += ubrzanje;
        return this.trenutnaBrzina;
    },
   zakoci: function(brojSekundi){
       while (this.trenutnaBrzina > 0 || brojSekundi ==0){
        this.trenutnaBrzina -= 2;
        console.info("Trenutna brzina pri kočenju je: " + this.trenutnaBrzina);   
        
        brojSekundi--;
       }
   }
};


console.log(auto.propertyIsEnumerable("marka"));

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
//for (let key in auto) {
  //  if (auto.propertyIsEnumerable(key)) {
    //    console.log("ključ: " + key + "; vrijednost: " + auto[key]);
//    }
//}


console.log("Ja vozim auto marke: " + auto.marka);
//console.log(`Ja vozim auto marke: ${auto.marka}`); //isto što i iznad
console.log("Ja vozim auto marke: " + auto.marka + " model" + auto.model + " iz godine" + auto.godina);
console.log("Auto vozi brzinom" + auto.marka);
console.log("Auto nakon ubrzanja vozi brzinom " + auto.ubrzaj(60));
console.log("Auto nakon kočenja vozi brzinom " + auto.zakoci(29));

var json = JSON.stringify(auto);
console.log(json);
