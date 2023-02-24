var dobro = 1234567890;
var lose = "1123456";
var jedinstveniZnakovi = function(password) {

    console.log("test " + password);
    let isNum = _.isNumber(password);
    console.log("is number " + isNum);
};

function isUniqueCharacters(password)
{
    for(var i =0; i <= password.length; i++){

        console.log(password.charAt(i));
    }
}

isUniqueCharacters(lose);

var myArray = [];
for(var i = 0; i <= password.length; i++) {
    var myChar = password.charAt(i);
    if (!myArray.includes(myChar)){
        myArray.push(myChar);
    }
    else{
        return false
    }
}

for (var j=0; j<myArray.length; j++){

}
console.log(myArray)

function isVeciOd10(password){
    if (password.length > 10)
}
return password.substring(0, 10);
}
return password;

}
jedinstveniZnakovi(dobro);
jedinstveniZnakovi(lose);