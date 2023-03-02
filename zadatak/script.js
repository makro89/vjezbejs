//1

var div = document.getElementsByClassName("description")[0];

var y = document.createElement("h1");
y.innerHTML = "Ovo je naš header";
div.parentNode.insertBefore(y, div);

//2

var divInfo = document.createElement("div");
divInfo.className = "info";

var foot = document.getElementById("footer");

div.parentNode.insertBefore(divInfo, foot);

//3
const ul = footerNode.getElementsByTagName("ul")[0];

var list
