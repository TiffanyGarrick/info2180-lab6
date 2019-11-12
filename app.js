// JavaScript File

function send_throughbutton() {
    var request = new XMLHttpRequest();
    request.open('GET', 'superheroes.php');
    request.send(null);
    request.onreadystatechange = function () { 
        if (request.readyState === 4) {
            document.getElementById('context').innerHTML = request.responseText;
            alert(request.responseText);
            document.getElementById('search').style.display = 'none';
        }
    };
}

function Text_box() {
  var txt = document.createElement("INPUT");
  txt.setAttribute("type", "text");
  txt.setAttribute("value", "eg. Captain America or Steve Rogers");
  document.body.appendChild(txt);
}

function result(){
    var answer=Text_box();
    if (answer == "eg. Captain America or Steve Rogers") {
        alert(send_throughbutton());
    } else if(answer==null){
        alert("Incorrect Statement");
    }
}

function array_things(){
    var requ = new XMLHttpRequest();
    requ.open('GET', 'superheroes.php', true);
    requ.send(null);
    requ.onreadystatechange = function () { 
        if (this.readyState === 4) {
            var info=JSON.parse(this.responseText);
            console.log(info);
            for (var i=0; i<info.length; i++){
                var id = info[0][0];
                var name = info[0][1];
                var alias = info[0][2];
                var bibliography = info[0][3];
            }
        }
    };
}
    
  /*  var res = <?php echo json_encode($superheroes); ?>;  
    alert(res[0]);
    for(var i = 0; i < res.length; i++){ 
        document.write(res[i]); 
    } */