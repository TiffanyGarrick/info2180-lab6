// JavaScript File
var request = new XMLHttpRequest();
request.open('GET', 'superheroes.php');

request.onreadystatechange = function () { 
    if (request.readyState === 4) {
        document.getElementById('context').innerHTML = request.responseText;
    }
};
function send_throughbutton() {
    request.send();
    document.getElementById('search').style.display = 'none';
}
function trying(){
  alert(request.send());
}