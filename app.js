// JavaScript File

function send_throughbutton() {
    var request = new XMLHttpRequest();
    request.open('GET', 'superheroes.php');
    request.send(null);
    request.onreadystatechange = function () { 
        if (request.readyState === 4) {
            document.getElementById('context').innerHTML = request.responseText;
        }
    };
    document.getElementById('search').style.display = 'none';
    alert(request.responseText);
}